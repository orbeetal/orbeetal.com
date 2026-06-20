import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = ["/", "/services", "/contact", "/team", "/terms"];

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

async function waitForPageReady(page, path) {
  await page.goto(path, { waitUntil: "networkidle" });

  if (path === "/") {
    await page.locator("#idea-contest").scrollIntoViewIfNeeded();
    await page.waitForFunction(() => {
      const animated = document.querySelectorAll("#idea-contest [style*='opacity']");
      return (
        animated.length === 0 ||
        [...animated].every((el) => parseFloat(getComputedStyle(el).opacity) >= 0.99)
      );
    });
  }
}

for (const path of pages) {
  test(`a11y: ${path}`, async ({ page }) => {
    await waitForPageReady(page, path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}
