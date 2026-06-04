import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const SECTIONS = [
  { name: "01-hero", scrollToTop: true },
  { name: "02-tobios", selector: "#tobiOS" },
  { name: "03-experience", selector: ".career" },
  { name: "04-tech-stack", selector: ".skills" },
  { name: "05-projects", selector: ".projects" },
  { name: "06-contact", selector: ".cta" },
];

if (!existsSync("screenshots")) {
  await mkdir("screenshots");
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:5173", { waitUntil: "networkidle" });

for (const section of SECTIONS) {
  if (section.scrollToTop) {
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  } else {
    await page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (el) el.scrollIntoView({ block: "start", behavior: "instant" });
    }, section.selector);
  }

  await page.waitForTimeout(3000);

  const path = `screenshots/${section.name}.png`;
  await page.screenshot({ path });
  console.log(`Saved ${path}`);
}

await browser.close();
