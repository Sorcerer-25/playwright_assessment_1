import {test,expect} from "@playwright/test"

test("Demo Webshop Launch",async ({page}) => {

    await page.setViewportSize({width:1366,height:780})
    await page.goto("https://blinkit.com/")
    await page.locator('//a[@class="SearchBar__Button-sc-16lps2d-4 fgHDQx"]').click()
    await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').fill("Chocolate")
    expect(await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').inputValue(),"Input value mismatch").toBe("Chocolate")
    await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').clear()
    expect(await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').inputValue(),"Input value mismatch").toBe("")
    await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').fill("Juice")
    let value = await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').inputValue()
    console.log("Input Value : ", value);
    expect(await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').inputValue(),"Input value mismatch").toBe("Juice")
    
})

//! OUTPUT
//* Doesnt work in headless mode(requires manual location entry)

/* Running 1 test using 1 worker
[chromium] › tests\test3.spec.js:3:5 › Demo Webshop Launch
Input Value :  Juice
  1 passed (12.6s)

To open last HTML report run:

  npx playwright show-report

*/

