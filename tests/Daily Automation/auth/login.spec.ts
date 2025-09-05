import { test, expect } from '@playwright/test';
import { production_URL } from '../../../config/urls';
import { testUsers } from '../../../config/test_users';

// Login Flow on Production
// Testing Log in, Log in with Legacy PIN, Log in with Invalid PIN, Forgot PIN - Reset Pin
// Testing "Log In Here" Link, "Forgot your PIN?" Link, "Sign Up" Link

test('Login', async ({ page }) => {
    await page.goto(production_URL);
    await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(testUsers[0].phoneNumber);
    await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill(testUsers[0].pin);
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('button', { name: 'No Thanks' }).click();
    await expect(page).toHaveURL('https://app.spoofcard.com/');
});

test('Login Flow with Legacy PIN', async ({ page }) => {
    await page.goto(production_URL);
    await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(testUsers[0].phoneNumber);
    await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill(testUsers[0].pin);
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('button', { name: 'No Thanks' }).click();
    await expect(page).toHaveURL('https://app.spoofcard.com/');
});

test('Login Flow with Invalid PIN', async ({ page }) => {
    await page.goto(production_URL);
    await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(testUsers[0].phoneNumber);
    await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill('0000');
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.getByText('Error (227)')).toBeVisible();
});


test('"Log In Here" Links to Legacy Login Page', async ({ page }) => {
  await page.goto(production_URL);
  await page.getByRole('link', { name: 'Log In Here' }).click();
  await expect(page).toHaveURL('https://app.spoofcard.com/login?type=legacy_pin');
});

test('"Forgot your PIN?" Links to Forgot PIN Page', async ({ page }) => {
  await page.goto(production_URL);
  await page.getByRole('link', { name: 'Forgot your PIN?' }).click();
  await expect(page).toHaveURL('https://app.spoofcard.com/forgot-pin');
});

test('"Sign Up" Links to Get Started Page', async ({ page }) => {
  await page.goto(production_URL);
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await expect(page).toHaveURL('https://app.spoofcard.com/get-started');
});
