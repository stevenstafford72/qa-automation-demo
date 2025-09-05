import { test, expect } from '@playwright/test';


const PHONE_NUMBER = '16152385052';
const PIN = '4951';
const LEGACY_PIN = '126368231';


test.beforeEach(async ({ page }) => {
    await page.goto('https://app.spoofcard.com/login');
  await page.getByRole('textbox', { name: 'Enter your phone number' }).fill(PHONE_NUMBER);
  await page.getByRole('textbox', { name: 'Enter your 4-digit PIN' }).fill(PIN);
  await page.getByRole('button', { name: 'Log In' }).click();
  try {
    // Attempt to click the "No Thanks" button if it is available
    await page.getByRole('button', { name: 'No Thanks' }).click();
  } catch (error) {
    // If the button is not found, log the error and continue
    console.log('No "No Thanks" button found, proceeding to the next step.');
  }
  await page.getByRole('link', { name: 'Send A Text NEW!' }).click();
});


// test.skip('T-001: Send a text with random sender', async ({ page }) => {
//   await page.getByRole('textbox', { name: 'Number to text' }).fill('(615) 635-1456');
//   await page.getByRole('button', { name: 'Select sender number' }).click();
//   await page.getByRole('textbox', { name: 'Search by area code' }).fill('615');

//   // Get all matching sender number buttons
//   const senderButtons = await page.getByRole('button', { name: /^\(\d{3}\) \d{3}-\d{4}/ }).all();

//   // Check if any sender numbers were found
//   if (senderButtons.length > 0) {
//       // Generate a random index
//       const randomIndex = Math.floor(Math.random() * senderButtons.length);

//       // Click the randomly selected button
//       await senderButtons[randomIndex].click();

//       await page.getByRole('textbox', { name: 'Enter your message here' }).click();
//       await page.getByRole('textbox', { name: 'Enter your message here' }).fill('Hi Spoofcard Automated Texting Check ');
//       await page.locator('#SendSMSButton').click();
//       await page.getByText('Hi Spoofcard Automated').isVisible();
//   } else {
//       // Handle the case where no sender numbers were found
//       console.warn("No sender numbers found matching the area code.");
//       //You might want to fail the test here, or skip the rest of the test
//       expect(senderButtons.length).toBeGreaterThan(0);
//   }
// });

// test.skip('T-002: Send a Text with Image', async ({ page }) => {
//   await page.getByRole('textbox', { name: 'Number to text' }).fill('(615) 635-1456');
//   await page.getByRole('button', { name: 'Select sender number' }).click();
//   await page.getByRole('button', { name: '(732) 313-2639 Newark, US' }).click();
//   await page.getByRole('button', { name: 'We think you’ll love this' }).click();
//   await page.getByText('Click to upload').click();

  // // Use a sample image for testing
  // const imagePath = path.resolve(__dirname, 'sample-image.png');
  // await page.locator('div').filter({ hasText: 'Upload PhotosClick to upload' }).nth(1).setInputFiles(imagePath);
  // await page.locator('div').filter({ hasText: 'Upload PhotosClick to upload' }).nth(1).setInputFiles('Screenshot 2025-03-07 at 3.34.59 PM.png');
  // await page.getByRole('button', { name: 'Attach' }).click();
  // await page.locator('#SendSMSButton').click();
// });


// test.skip('T-003: Add credits button pops up Credits package', async ({ page }) => {
//     await page.getByRole('button', { name: 'Add Credits' }).click();
//     await page.getByRole('heading', { name: 'Select Package' }).isVisible();
// });