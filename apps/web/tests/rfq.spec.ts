import { test, expect } from '@playwright/test';

test.describe('B2B RFQ Portal - Security & E2E Flow', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the localized RFQ portal page (English default)
    await page.goto('http://localhost:3000/en/rfq');
  });

  test('Page renders and displays the secure headers correctly', async ({ page }) => {
    // 1. Verify that target secure B2B elements render
    const title = page.locator('h1.section-title');
    await expect(title).toBeVisible();
    await expect(title).toContainText('Secure B2B RFQ Portal');
  });

  test('Wizard Form navigation structure behaves correctly', async ({ page }) => {
    // Fill step 1 Contact Details
    await page.fill('input[name="companyName"]', 'Test Steel Fabricators');
    await page.fill('input[name="contactName"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@teststeel.com');
    await page.fill('input[name="phone"]', '+4723456789');

    // Click Next to proceed to Specifications (Step 2)
    const nextBtn = page.locator('button:has-text("Next")');
    await expect(nextBtn).toBeVisible();
    await nextBtn.click();

    // Verify step 2 parameters exist
    const steelGradeSelect = page.locator('select[name="steelGrade"]');
    await expect(steelGradeSelect).toBeVisible();
    await expect(steelGradeSelect).toHaveValue('S355J2+N');
  });

  test('Client-side magic bytes validator rejects disguised files', async ({ page }) => {
    // Fill step 1
    await page.fill('input[name="companyName"]', 'Malware Test Org');
    await page.fill('input[name="contactName"]', 'Security Auditor');
    await page.fill('input[name="email"]', 'audit@SideroHub.com');
    await page.fill('input[name="phone"]', '+331234567');
    await page.locator('button:has-text("Next")').click();

    // Proceed to Step 3 Drawing Uploads
    await page.locator('button:has-text("Next")').click();

    // Simulate file drop of a disguised executable file (.exe renamed to .dxf)
    // In Playwright we mock input file choose actions
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.click('text=Drag and drop your engineering drawings here');
    const fileChooser = await fileChooserPromise;

    // Create a mock executable byte envelope payload
    const mockExeBuffer = Buffer.from('MZ\x90\x00\x03\x00\x00\x00\x04\x00\x00\x00\xff\xff\x00\x00', 'binary');
    
    await fileChooser.setFiles([{
      name: 'plate.dxf',
      mimeType: 'application/octet-stream',
      buffer: mockExeBuffer
    }]);

    // Click Next to step 4
    await page.locator('button:has-text("Next")').click();

    // Attempt Submission
    const submitBtn = page.locator('button:has-text("Submit Quote Request")');
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();

    // Verify error notification shows client-side magic number rejection
    const errorAlert = page.locator('text=Security Rejection: File binary header verification failed');
    await expect(errorAlert).toBeVisible();
  });
});
