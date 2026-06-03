import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://127.0.0.1:5173", { waitUntil: "networkidle" });

// Slow scroll to bottom to trigger all whileInView animations
await page.evaluate(async () => {
  const scrollHeight = document.body.scrollHeight;
  const viewportHeight = window.innerHeight;
  const steps = Math.ceil(scrollHeight / 200);
  
  for (let i = 0; i <= steps; i++) {
    window.scrollTo(0, i * 200);
    await new Promise(r => setTimeout(r, 150));
  }
  
  // Stay at bottom briefly
  await new Promise(r => setTimeout(r, 500));
});

await page.waitForTimeout(1000);

// Take full-page screenshot (shows entire page regardless of scroll position)
await page.screenshot({ path: "screenshot.png", fullPage: true });
console.log("Screenshot saved to screenshot.png");
await browser.close();
