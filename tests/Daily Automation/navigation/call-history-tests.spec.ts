import { test, expect } from '@playwright/test';

const PHONE_NUMBER = '13472037006';
const PIN = '4951';
const LEGACY_PIN = '126368231';

test.beforeEach(async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(PHONE_NUMBER);
  await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill(PIN);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'No Thanks' }).click();
  await page.getByRole('link', { name: 'Call History' }).click();
});

test('CH-001: Call History Pages Loads with Search Bar', async ({ page }) => {
  await expect(page.getByRole('textbox', { name: 'Search by Phone Number' })).toBeVisible();
});

test('CH-002: Call History Pages Loads with select all', async ({ page }) => {
  await expect(page.getByRole('checkbox', { name: 'Select All' })).toBeVisible();
});

test('CH-003: Call History Pages Loads with filter', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Filter' })).toBeVisible();
});