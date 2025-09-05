import { test, expect } from '@playwright/test';


const PHONE_NUMBER = '16152385717';
const PIN = '4951';
const LEGACY_PIN = '126368231';


test.beforeEach(async ({ page }) => {
    await page.goto('https://app.spoofcard.com/login');
  await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(PHONE_NUMBER);
  await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill(PIN);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'No Thanks' }).click();
  await page.getByRole('link', { name: 'Settings', exact: true }).click();
});

test('Account Tab display with an saves button', async ({ page }) => {
    await page.getByRole('button', { name: 'Save Changes' }).isVisible();
});

test('Transaction tab directs to transactions section', async ({ page }) => {
    await page.getByRole('tab', { name: 'Transactions' }).click();
    await expect(page).toHaveURL('https://app.spoofcard.com/settings/transactions');
    await page.getByRole('heading', { name: 'Payment Transactions' }).click();
});

test('Payment tab directs to payment section', async ({ page }) => {
    await page.getByRole('tab', { name: 'Payment' }).dblclick();
    await page.getByRole('heading', { name: 'Manage Payment Method' }).click();

});

test('On Payment tab, Here link to billing page', async ({ page }) => {
    await page.getByRole('tab', { name: 'Payment' }).dblclick();
    await page.getByRole('heading', { name: 'Manage Payment Method' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'here' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('link', { name: 'The logo for the business' }).isVisible();    
});
