import { test, expect } from '@playwright/test';


const PHONE_NUMBER = '17327681999';
const PIN = '4951';
const LEGACY_PIN = '126368231';


test.beforeEach(async ({ page }) => {
    await page.goto('https://app.spoofcard.com/login');
  await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(PHONE_NUMBER);
  await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill(PIN);
  await page.getByRole('button', { name: 'Log In' }).click();
  try {
    // Attempt to click the "No Thanks" button if it is available
    await page.getByRole('button', { name: 'No Thanks' }).click();
  } catch (error) {
    // If the button is not found, log the error and continue
    console.log('No "No Thanks" button found, proceeding to the next step.');
  }
  await page.getByRole('link', { name: 'Upgrade to a Corporate' }).click();
});

test('Page Loads account with Corp Form', async ({ page }) => {
    await page.getByRole('heading', { name: 'Corporate User Application' }).isVisible();
});

