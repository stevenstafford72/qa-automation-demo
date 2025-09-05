import { test, expect } from '@playwright/test';


const PHONE_NUMBER = '6156351456';
const PIN = '4951';
const LEGACY_PIN = '126368231';


test.beforeEach(async ({ page }) => {
    await page.goto('https://app.spoofcard.com/login');
  await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(PHONE_NUMBER);
  await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill(PIN);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'No Thanks' }).click();
  await page.getByRole('link', { name: 'Add Credits' }).click();
});

test('Credit Package Display', async ({ page }) => {
    await page.getByRole('heading', { name: 'Select Package' }).isVisible();

});
