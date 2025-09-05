import { test, expect } from '@playwright/test';
// import axios from 'axios';

// async function getVerificationCode(apiUrl: string, maxRetries = 5, retryInterval = 2000): Promise<string | null> {
//     for (let i = 0; i < maxRetries; i++) {
//         try {
//             const response = await axios.get(apiUrl);
//             console.log(`Attempt ${i + 1}:`, response.data); // Debugging log

//             if (response.data?.verification_code) {
//                 return response.data.verification_code;
//             }

//             // Attempt to extract a 6-digit code from a string response
//             const match = response.data.match(/\b\d{6}\b/);
//             if (match) return match[0];

//         } catch (error) {
//             console.error(`Attempt ${i + 1} failed: ${error.message}`);
//         }

//         if (i < maxRetries - 1) {
//             await new Promise(resolve => setTimeout(resolve, retryInterval));
//         }
//     }
//     return null;
// 


// // SS-001: Sign Up Flow with Email and Phone Verification
// test.skip('SS-001: Sign Up Flow with Email and Phone Verification', async ({ page }) => {
//     await page.goto('https://qa.spoofcard.com?x-vercel-protection-bypass=7kygzH1YPN0UdTEqTQTZRyKG2NvAxprP&x-vercel-set-bypass-cookie=true');
//     await page.getByRole('link', { name: 'Sign Up' }).click();
//     await page.getByRole('textbox', { name: 'Enter your email' }).fill(`testemail${Date.now()}@example.com`);
//     await page.getByRole('textbox', { name: 'Enter your phone number' }).fill('12342310576');
//     await page.getByRole('button', { name: 'Next' }).click();

//     const apiUrl = 'https://api.retool.com/v1/workflows/79a855b2-073a-40db-9b95-e021d5ec21ee/startTrigger?workflowApiKey=retool_wk_f2b907780d064a1597e5fa972a8df9c0';
//     const verificationCode = await getVerificationCode(apiUrl);

//     if (!verificationCode) {
//         throw new Error('Verification code not received after multiple retries');
//     }

//     await page.getByRole('textbox', { name: 'verification input' }).fill(verificationCode);
//     await page.getByRole('button', { name: 'Verify' }).isVisible();
//     await page.getByRole('button', { name: 'Verify' }).click();
// });

test('Verify Navigation to Terms of Service Page', async ({ page }) => {
    await page.goto('https://app.spoofcard.com/get-started');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('#login-paper').getByRole('link', { name: 'Terms of Service' }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL(/https?:\/\/www.spoofcard.com\/terms-of-service/);
});


test('Verify Navigation to Privacy Policy Page', async ({ page }) => {
    await page.goto('https://app.spoofcard.com/get-started');
    await page.locator('#login-paper').getByRole('link', { name: 'Privacy Policy' }).click();
    const page2 = await page.waitForEvent('popup');
    await expect(page2).toHaveURL(/https:\/\/www\.spoofcard\.com\/privacy.*/);
});


test('Verify Sign Up/Login Button Functionality', async ({ page }) => {
    await page.goto('https://app.spoofcard.com/get-started');
    await page.locator('#sign-up-login').click();

});
