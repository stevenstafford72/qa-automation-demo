import { test, expect } from '@playwright/test';


const PHONE_NUMBER = '17326939831';
const PIN = '4951';
const LEGACY_PIN = '126368231';


test.beforeEach(async ({ page }) => {
    await page.goto('https://app.spoofcard.com/login');
    await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(PHONE_NUMBER);
    await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill(PIN);
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('button', { name: 'No Thanks' }).click();
});

test('Place a call: random button', async ({ page }) =>  {
    await page.getByRole('textbox', { name: 'Number to call' }).fill('6156351456');
    await page.getByRole('button', { name: 'Random Number' }).click();
    await page.getByRole('button', { name: 'Random Number' }).click();
    await page.getByRole("button", {name: "Place Call 1 Credit per Minute"}).click()
    await page.getByText('To connect your call, please').isVisible();
    await page.getByRole('button', { name: 'Make a New Call' }).click();
    
});

test('Place a call: with Voice Changer', async ({ page }) =>  {
    await page.getByRole('textbox', { name: 'Number to call' }).fill('6156351456');
    await page.getByRole('button', { name: 'Random Number' }).click();
    await page.getByRole('button', { name: 'Random Number' }).click();
    await page.getByRole('combobox', { name: 'Voice Changer None' }).click();
    await page.getByRole('option', { name: 'Man Voice Changer play', exact: true }).click();
    await page.getByRole("button", {name: "Place Call 1 Credit per Minute"}).click()
    await page.getByText('To connect your call, please').isVisible();
    await page.getByRole('button', { name: 'Make a New Call' }).click();

});

test('Place a call: with Background Noise', async ({ page }) =>  {
    await page.getByRole('textbox', { name: 'Number to call' }).fill('6156351456');
    await page.getByRole('button', { name: 'Random Number' }).click();
    await page.getByRole('button', { name: 'Random Number' }).click();
    await page.getByRole('combobox', { name: 'Background Noise None' }).click();
    await page.getByRole('option', { name: 'Airport play' }).click();
    await page.getByRole("button", {name: "Place Call 1 Credit per Minute"}).click()
    await page.getByText('To connect your call, please').isVisible();
    await page.getByRole('button', { name: 'Make a New Call' }).click();

});

test('Place a call: with Recording', async ({ page }) =>  {
    await page.getByRole('textbox', { name: 'Number to call' }).fill('6156351456');
    await page.getByRole('button', { name: 'Random Number' }).click();
    await page.getByRole('button', { name: 'Random Number' }).click();
    await page.locator('div').filter({ hasText: /^Record$/ }).getByLabel('+1 Credit').click();
    await page.getByRole("button", {name: "Place Call 1 Credit per Minute"}).click()
    await page.getByText('To connect your call, please').isVisible();
    await page.getByRole('button', { name: 'Make a New Call' }).click();

});

test('Place a call: with Straight To Voicemail', async ({ page }) =>  {
    await page.getByRole('textbox', { name: 'Number to call' }).fill('6156351456');
    await page.getByRole('button', { name: 'Random Number' }).click();
    await page.getByRole('button', { name: 'Random Number' }).click();
    await page.locator('div').filter({ hasText: /^Straight to Voicemail$/ }).getByLabel('+1 Credit').click();
    await page.getByRole('button', { name: 'Place Voicemail Call' }).click();
    //await page.getByText('Don\'t show again.').click(); Dont need
    //await page.getByRole('button', { name: 'Continue' }).click(); Dont need 
    await page.locator('div').filter({ hasText: /^End Call$/ }).getByRole('button').click();
});
