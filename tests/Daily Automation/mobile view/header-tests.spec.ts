import { test, expect, devices } from '@playwright/test';

const PhoneNumber = '17326939831';
const Pin = '4951';

test.use({
  ...devices['iPhone 12'],
});

test('Mobile View: Dashboard Navigates to Call Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  await page.locator('#hamburger-button').click();
  await page.getByRole('button', { name: 'Learn More' }).click();
  await page.getByRole('button', { name: 'About' }).click();
  await page.locator('#hamburger-button').click();
  await page.getByRole('textbox', { name: 'Enter your phone number' }).click();
  await page.getByRole('textbox', { name: 'Enter your phone number' }).fill('(615) 635-1456');
  await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).click();
  await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill('4951');
  await page.getByRole('button', { name: 'Log In' }).isVisible();
});
// Hello