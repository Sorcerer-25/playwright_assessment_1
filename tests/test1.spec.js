import {test,expect} from "@playwright/test"

test("Amazon Launch",async ({page}) => {

    await page.setViewportSize({width:1366,height:768})
    await page.goto("https://www.amazon.in/")
    let searchBox = await page.locator('//input[@placeholder="Search Amazon.in"]')
    await searchBox.fill("Laptop")
    await page.keyboard.press("Enter")
    await page.goBack()
    expect(searchBox.inputValue(),"SearchBox Value not equals to Laptop").toBe("Laptop")
})



//!OUTPUT
/* Error: SearchBox Value not equals to Laptop

    expect(received).toBe(expected) // Object.is equality

    Expected: ""
    Received: Promise {}

      11 |     await page.waitForTimeout(2000)
      12 |     // console.log(await searchBox.inputValue());
    > 13 |     expect(searchBox.inputValue(),"SearchBox Value not equals to Laptop").toBe("")
         |                                                                           ^
      14 | })
        at Y:\PW assessment\tests\test1.spec.js:13:75

    Error: locator.inputValue: Test ended.
    Call log:
      - waiting for locator('//input[@placeholder="Search Amazon.in"]')


      11 |     await page.waitForTimeout(2000)
      12 |     // console.log(await searchBox.inputValue());
    > 13 |     expect(searchBox.inputValue(),"SearchBox Value not equals to Laptop").toBe("")
         |                      ^
      14 | })
        at Y:\PW assessment\tests\test1.spec.js:13:22

    Error Context: test-results\test1-Amazon-Launch-chromium\error-context.md

Testing stopped early after 1 maximum allowed failures.
  1 failed
    [chromium] › tests\test1.spec.js:3:5 › Amazon Launch ───────────────────────────────────────────
  1 error was not a part of any test, see above for details
  
  */