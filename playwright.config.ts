import { defineConfig, devices } from "@playwright/test"
import { existsSync } from "node:fs"
import { homedir } from "node:os"
import path from "node:path"

const localChromiumExecutable = path.join(
  homedir(),
  ".cache/ms-playwright/chromium-1223/chrome-linux64/chrome"
)
const chromiumExecutable =
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ||
  (existsSync(localChromiumExecutable) ? localChromiumExecutable : undefined)

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    baseURL: "http://127.0.0.1:3101",
    launchOptions: chromiumExecutable ? { executablePath: chromiumExecutable } : undefined,
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev -- --hostname 127.0.0.1 --port 3101",
    url: "http://127.0.0.1:3101/landing",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
})
