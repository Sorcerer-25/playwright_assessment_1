import {test,expect} from "@playwright/test"

test("Demo Webshop Launch",async ({page}) => {

    await page.setViewportSize({width:1366,height:780})
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator('(//a[@href="/digital-downloads"])[1]').click()
    await page.locator('(//input[@class="button-2 product-box-add-to-cart-button"])[2]').click()
    let quantity = await page.locator('//span[@class="cart-qty"]').textContent()
    console.log("Quantity",quantity);
    await page.locator('(//a[@href="/cart"])[2]').click()
    // await page.waitForTimeout(2000)
    await page.locator('//input[@value="1"]').fill('3')
    await page.keyboard.press("Enter")
    // await page.waitForTimeout(2000)
    expect(await page.locator('//span[@class="product-price order-total"]').textContent()).toBe('30.00')
    
})

//! OUTPUT
//*Working in debug mode

/* Running 1 test using 1 worker
[chromium] › tests\test2.spec.js:3:5 › Demo Webshop Launch
(1)
  1 passed (27.1s)

To open last HTML report run:

  npx playwright show-report
  
  */