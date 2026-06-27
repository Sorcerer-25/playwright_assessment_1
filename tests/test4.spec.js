import {test,expect} from "@playwright/test"

test("Blinkit Launch",async ({page}) => {

    await page.setViewportSize({width:1366,height:780})
    await page.goto("https://blinkit.com/")
    await page.locator('//a[@class="SearchBar__Button-sc-16lps2d-4 fgHDQx"]').click()
    await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').fill("Pancake")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+X")
    expect(await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').inputValue()).toBe("")
    await page.keyboard.press("Control+V")
    expect(await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').inputValue()).toBe("Pancake")
    await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').screenshot({path:"tests/blinkit_text.png"})
    await page.keyboard.press("Enter")
    await page.locator('((//div[@class="tw-text-300 tw-font-semibold tw-line-clamp-2"])/ancestor::div[3]/descendant::div[@role="button"])[3]').click()
    await page.locator('((//div[@class="tw-text-300 tw-font-semibold tw-line-clamp-2"])/ancestor::div[3]/descendant::div[@role="button"])[4]').click()
    console.log(await page.locator('(//div[@class="CartButton__Text-sc-1fuy2nj-4 iQAgjV"])[2]').textContent());
    
    
    
    
        
})

//! OUTPUT
//* Works in headed mode only

/* Running 1 test using 1 worker
[chromium] › tests\test4.spec.js:3:5 › Blinkit Launch
 ₹398
  1 passed (11.1s)

To open last HTML report run:

  npx playwright show-report
  
  */
