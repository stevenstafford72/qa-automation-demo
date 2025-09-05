import { test, expect } from '@playwright/test';

const PhoneNumber = '17326939831';
const Pin = '4951';

// LP-001: Navigate to Login Page via Header Logo
test('LP-001: Navigate to Login Page via Header Logo', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/get-started');
  await page.locator('#header-logo').click();
  await expect(page).toHaveURL('https://app.spoofcard.com/login');
});

// LP-002: Open Features Page in New Tab
test('LP-002: Open Features Page in New Tab', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/get-started');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Features' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/https:\/\/www\.spoofcard\.com\/features.*/);
});

// LP-003: Navigate to Login Page via Log In Link
test('LP-003: Navigate to Login Page via Log In Link', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/get-started');
  await page.getByRole('banner').getByRole('link', { name: 'Log In' }).click();
  await expect(page).toHaveURL('https://app.spoofcard.com/login');
});

// LP-004: Open Get Our App Page in New Tab
test('LP-004: Open Get Our App Page in New Tab', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/get-started');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Get Our App' }).click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL('https://www.spoofcard.com/');
});

// CP-001: Verify Logout Redirects to Login Page
test('CP-001: Verify Logout Redirects to Login Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(PhoneNumber);
  await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill(Pin);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'No Thanks' }).click();
  await expect(page).toHaveURL('https://app.spoofcard.com/');
  await page.getByRole('link', { name: 'Log Out' }).click();
  await expect(page).toHaveURL('https://app.spoofcard.com/login');
});

// CP-002: Dashboard Navigates to Call Page
test('CP-003: Dashboard Navigates to Call Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(PhoneNumber);
  await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill(Pin);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'No Thanks' }).click();
  await page.getByRole('link', { name: 'Settings', exact: true }).click();
  await expect(page).toHaveURL('https://app.spoofcard.com/settings');
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await expect(page).toHaveURL('https://app.spoofcard.com/');
});

