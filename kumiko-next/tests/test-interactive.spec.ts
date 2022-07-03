import { test, expect } from "@playwright/test";

test.describe("Check Headers", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("http://127.0.0.1:3000"); // basically use localhost for now, but in prod use the actual site
  });

  test("Check Login Button", async ({ page }) => {
    // Assertions use the expect API.

    page.click("text=Login");
    await expect(page).toHaveURL("http://127.0.0.1:3000/login");
  });

  test("Check GitHub Button", async ({ page }) => {
    page.click("text=Github");
    await expect(page).toHaveURL("https://github.com/No767/Kumiko");
  });
});
