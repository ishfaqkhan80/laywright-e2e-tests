import { expect, test } from '@playwright/test'
import { HomePage } from 'pages/HomePage'

test("homepage loads and has correct title", async({ page }) => {
    const homePage = new HomePage(page)

    await homePage.goto()
    const title = await homePage.getTitle()

    expect(title).toContain('Playwright')
})
