import { test, expect } from '@playwright/test';



test(' Verify Footer Logo links to Home', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/get-started');
  await page.locator('#footer-logo').click();
  await expect(page).toHaveURL('https://app.spoofcard.com/login');
});

test('Verify Texting Link Opens Texting Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Texting' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/https:\/\/www\.spoofcard\.com\/texting/);
});

test('Verify Record Calls Link Opens Record Calls Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Record Calls' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/https:\/\/www\.spoofcard\.com\/features.*#record-calls/);
});

test('Verify Straight To Voicemail Link Opens Voicemail Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Straight To Voicemail' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/https:\/\/www\.spoofcard\.com\/straight-to-voicemail/);
});

test('Verify Disguise Your Voice Link Opens Voice Changer Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Disguise Your Voice' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/https:\/\/www\.spoofcard\.com\/features.*#control-voice/);
});

test('Verify Blog Link Opens Blog Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Blog' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/https:\/\/www\.spoofcard\.com\/blog/);
});

test('Verify Support Link Opens Support Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Support' }).click();
  const page1 = await page1Promise; 
  await expect(page1).toHaveURL(/https:\/\/appstudio\.zendesk\.com\/hc\/en-us/);
});

test('Verify Legal Link Opens Legal Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Legal' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/https:\/\/www\.spoofcard\.com\/legal/);
});

test('Verify Privacy Policy Link Opens Privacy Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/https:\/\/www\.spoofcard\.com\/privacy/);
});


test('Verify Terms of Service Link Opens Terms Page', async ({ page }) => {
  await page.goto('https://app.spoofcard.com/login');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Terms of Service' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/https?:\/\/www.spoofcard.com\/terms-of-service/);

});
