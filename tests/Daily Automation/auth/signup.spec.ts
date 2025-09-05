import { test, expect } from '@playwright/test';
import { production_URL } from '../../../config/urls';


// Sign Up Flow on Production
// Testing Sign Up 

test('Sign Up', async ({ page }) => {
  await page.goto(production_URL);
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await expect(page).toHaveURL('https://app.spoofcard.com/get-started');
});
