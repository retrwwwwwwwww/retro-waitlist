import { expect, test, type Page } from "@playwright/test"

const viewports = [
  { name: "small-phone", width: 320, height: 568 },
  { name: "phone", width: 375, height: 812 },
  { name: "large-phone", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1366, height: 768 },
] as const

async function expectNoHorizontalOverflow(page: Page) {
  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    bodyScrollWidth: document.body.scrollWidth,
    scrollX: window.scrollX,
  }))

  expect(metrics.scrollX).toBe(0)
  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1)
  expect(metrics.bodyScrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1)
}

async function expectNavbarInsideViewport(page: Page) {
  const navBox = await page.getByRole("navigation").boundingBox()
  expect(navBox).not.toBeNull()
  if (!navBox) return

  const viewport = page.viewportSize()
  expect(viewport).not.toBeNull()
  if (!viewport) return

  const navCenter = navBox.x + navBox.width / 2
  expect(navBox.x).toBeGreaterThanOrEqual(-1)
  expect(navBox.x + navBox.width).toBeLessThanOrEqual(viewport.width + 1)
  expect(Math.abs(navCenter - viewport.width / 2)).toBeLessThanOrEqual(2)
}

for (const viewport of viewports) {
  test(`landing remains horizontally stable on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height })
    await page.goto("/landing")

    await expect(page).toHaveTitle(/RetroPick Waitlist/)
    await expect(page.getByRole("button", { name: /join waitlist/i })).toBeVisible()
    await expectNoHorizontalOverflow(page)
    await expectNavbarInsideViewport(page)

    const email = page.locator("#waitlist-email")
    await email.focus()
    await email.fill(`responsive-${viewport.name}@retropick.xyz`)

    await expect(email).toHaveValue(`responsive-${viewport.name}@retropick.xyz`)
    await expectNoHorizontalOverflow(page)
    await expectNavbarInsideViewport(page)

    await page.getByRole("combobox", { name: /who are you/i }).click()
    await expect(page.getByRole("option", { name: "Trader", exact: true })).toBeVisible()
    await expectNoHorizontalOverflow(page)
    await page.keyboard.press("Escape")

    await page.getByRole("combobox", { name: /what do you want retropick for/i }).click()
    await expect(page.getByRole("option", { name: "Prediction markets" })).toBeVisible()
    await expectNoHorizontalOverflow(page)
    await page.keyboard.press("Escape")

    await page.getByRole("button", { name: /join community/i }).click()
    await expect(page.getByRole("menuitem", { name: /discord/i })).toBeVisible()

    const menuBox = await page.getByRole("menu").boundingBox()
    expect(menuBox).not.toBeNull()
    if (menuBox) {
      expect(menuBox.x).toBeGreaterThanOrEqual(-1)
      expect(menuBox.x + menuBox.width).toBeLessThanOrEqual(viewport.width + 1)
    }
  })
}
