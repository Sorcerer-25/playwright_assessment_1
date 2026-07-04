import {test} from "@playwright/test"

test("amazon scenario", async ({page}) => {

    await page.goto('https://www.amazon.in/')
    await page.fill('[name="field-keywords"]','rc cars')
    await page.click('(//div[@class="s-suggestion-container"])[contains(.,"rc cars drift")]')
    let [popup] = await Promise.all([page.waitForEvent("popup"),page.locator('(//div[@data-component-type="s-search-result"])').nth(4).click()])
    await popup.click('[id="a-autoid-0-announce"]')
    await popup.click('(//li[@data-action="a-dropdown-options"]/a)[5]')
    await popup.click('[name="submit.add-to-cart"]')
    await popup.locator('//a[contains(text(),"Go to Cart")]').last().click()
    await popup.waitForTimeout(2000)
    await popup.click('[data-a-selector="decrement"]')
    await popup.waitForTimeout(2000)
    console.log(await popup.locator('[id="sc-subtotal-amount-activecart"]').textContent());

})



//* Works in headed mode
//! May not work in headless mode (requires manual amazon 'click to continue' button)

/*

athar_nk0za4o@Atharv MINGW64 /y/PW assessment (main)
$ npx playwright test tests/Assessment2/SC_01.spec.js --headed

Running 1 test using 1 worker
[chromium] › tests\Assessment2\SC_01.spec.js:3:5 › amazon scenario
 ₹3,156.00
  1 passed (19.9s)

To open last HTML report run:

  npx playwright show-report
  
  
*/