import { test, expect, firefox } from '@playwright/test';

const PHONE_NUMBER = '17327681999';
const PIN = '4951';
const LEGACY_PIN = '126368231';

test.beforeEach(async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(PHONE_NUMBER);
  await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill(PIN);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'No Thanks' }).click();

});


// D-001: Place A Call Directs to Dashboard
test('D-001: Place A Call Directs to Call Dashboard', async ({ page }) => {
    await page.getByRole('link', { name: 'Settings', exact: true }).click();
    await page.getByRole('link', { name: 'Place A Call' }).click();
    await expect(page).toHaveURL('https://app.spoofcard.com/');
});

// D-002: Place A Call Directs to Dashboard
test('D-002: Sent A Text Directs to Text Dashboard', async ({ page }) => {
    await page.getByRole('link', { name: 'Send A Text NEW!', exact: true }).click();
    await expect(page).toHaveURL('https://app.spoofcard.com/text');
});

// D-003: Call History Directs to Call History Dashboard'
test('D-003: Call History Directs to Call History Dashboard', async ({ page }) => {
    await page.getByRole('link', { name: 'Call History', exact: true }).click();
    await expect(page).toHaveURL('https://app.spoofcard.com/call-history');
});

// D-004: Add Credits Pops Up Credit Package
test('D-004: Add Credits Pops Up Credit Package', async ({ page }) => {
    await page.getByRole('link', { name: 'Add Credits' }).click();
    // await page.getByRole('heading', { name: 'Select Package' }).isVisible();
});

// D-005: Upgrade to a Corporate directs to upgrade page
test('D-005: Upgrade to a Corporate directs to upgrade page ', async ({ page }) => {
    await page.getByRole('link', { name: 'Upgrade to a Corporate' }).click();
    await expect(page).toHaveURL('https://app.spoofcard.com/upgrade-account');
});

// D-006: Settings Directs to Settings Page
test('D-006: Settings Directs to Settings Page ', async ({ page }) => {
    await page.getByRole('link', { name: 'Settings', exact: true }).click();
    await expect(page).toHaveURL('https://app.spoofcard.com/settings');
});


 // Add a delay between tests
 test.afterEach(async () => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
  });