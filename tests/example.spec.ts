import { test, expect } from '@playwright/test'

test('basic check – homepage has title', async ({ page }) => {
  await page.goto('https://playwright.dev/')
  await expect(page).toHaveTitle(/Playwright/)
})
