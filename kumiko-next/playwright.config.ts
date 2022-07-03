import { type PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    // {
    //     name: 'Pixel 4',
    //     use: {
    //       browserName: 'chromium',
    //       ...devices['Pixel 4'],
    //     },
    //   },

    //   {
    //     name: 'iPhone 11',
    //     use: {
    //       browserName: 'webkit',
    //       ...devices['iPhone 11'],
    //     },
    //   },
  ],
};
export default config;
