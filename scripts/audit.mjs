import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://127.0.0.1:5173", { waitUntil: "networkidle" });

const issues = [];

// 1. Check divider labels exist and are correct
const dividerLabels = await page.locator(".divider__label").allTextContents();
const visibleLabels = dividerLabels.filter(l => l.trim() && !l.includes('─'));
const expected = ["[ career.exe     ]", "[ skills.dll     ]", "[ projects.bin   ]", "[ contact.ini    ]"];
if (visibleLabels.length !== 4) issues.push(`Expected 4 divider labels, found ${visibleLabels.length}: ${JSON.stringify(visibleLabels)}`);

// 2. Check for amber prompt in Career
const prompts = await page.locator(".career .prompt").allTextContents();
if (prompts.length < 2) issues.push(`Expected 2 prompts in Career, found ${prompts.length}`);

// 3. Check green status dots in Career
const statusDots = await page.locator(".career .status-dot").count();
if (statusDots < 2) issues.push(`Expected at least 2 status dots, found ${statusDots}`);

// 4. Check cyan data line in Career
const lineExists = await page.locator(".career .line").count();
if (lineExists < 2) issues.push(`Expected 2 data lines, found ${lineExists}`);

// 5. Check section textures exist — evaluate CSS
const careerBeforeStyle = await page.evaluate(() => {
  const el = document.querySelector('.career');
  return el ? window.getComputedStyle(el, '::before').backgroundImage : null;
});
if (!careerBeforeStyle || careerBeforeStyle === 'none') issues.push("Career ::before has no background-image (no textures)");

// 6. Check divider spans full width
const dividerBox = await page.locator(".divider").first().boundingBox();
if (dividerBox) {
  if (dividerBox.width < 1400) issues.push(`Divider width ${dividerBox.width}px — should be ~1440px (full vw)`);
}

// 7. Check Career is full width
const careerBox = await page.locator(".career").boundingBox();
if (careerBox) {
  if (careerBox.width < 1400) issues.push(`Career width ${careerBox.width}px — should be ~1440px (full vw)`);
}

// 8. Check Career inner is constrained
const innerBox = await page.locator(".career__inner").boundingBox();
if (innerBox) {
  if (innerBox.width > 1100) issues.push(`Career inner width ${innerBox.width}px — should be ≤1000px`);
}

// 9. Check no visual overlap issues with section margins
const sections = ["hero", "career", "skills", "projects", "cta"];
for (let i = 0; i < sections.length - 1; i++) {
  const curr = await page.locator(`.${sections[i]}`).boundingBox();
  const next = await page.locator(`.${sections[i + 1]}`).boundingBox();
  if (curr && next) {
    const gap = next.y - (curr.y + curr.height);
    if (gap < 0) issues.push(`Overlap between ${sections[i]} and ${sections[i+1]} (${gap}px gap)`);
  }
}

// 10. Check heading visibility
const expHeading = page.locator('.section-title').first();
const expVisible = await expHeading.isVisible();
if (!expVisible) issues.push("Experience heading not visible");

if (issues.length === 0) {
  console.log("All checks passed — no issues detected.");
} else {
  console.log("Issues found:");
  issues.forEach((i, idx) => console.log(`  ${idx + 1}. ${i}`));
}

// Also dump some layout info
const mainBox = await page.locator("main").boundingBox();
console.log(`\nLayout info:`);
console.log(`  main width: ${mainBox?.width}px`);
if (dividerBox) console.log(`  divider width: ${dividerBox.width}px`);
if (careerBox) console.log(`  career width: ${careerBox.width}px`);
if (innerBox) console.log(`  career inner width: ${innerBox.width}px`);

await browser.close();
