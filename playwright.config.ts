import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 4 : undefined, // Increased parallel workers

  reporter: [
    ['html', { outputFolder: 'html-report' }],
    ['allure-playwright', { 
      outputFolder: 'allure-results',
      suiteTitle: true 
    }],
    ['list'] // Add list reporter for console output
  ],

  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure', 'isMobile': true,
    testIdAttribute: 'data-testid', // Recommended for more robust selectors
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'], 
        headless: true 
      },

    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'], 
        headless: true 
      },
      testMatch: [
        '**/footer-tests.spec.ts',
      ],
    },
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'], 
        headless: true 
      },
      testMatch: [
        '**/footer-tests.spec.ts',
      ],
    },
    {
      name: 'microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
      }, 
      testMatch: [
        '**/footer-tests.spec.ts',
      ],
    },
    {
      name: 'Mobile',
      use: { 
        ...devices['iPhone 12'], 
        video: 'on', // Always record video for mobile tests
        trace: 'on', // Always enable trace for mobile tests
        headless: true 
      },
      testMatch: [
        '**Daily Automation Mobile/header-tests.spec.ts',
      ],
    },
  ],
  // Uncomment and configure if you have a dev server
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  //   timeout: 120 * 1000, // Increased timeout
  // },
});