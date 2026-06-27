import {test,expect} from "@playwright/test"

test("Blinkit Launch",async ({page}) => {

    await page.setViewportSize({width:1366,height:780})
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("login-button").click()
    expect(await page.getByTestId("error").textContent()).toBe("Epic sadface: Username is required")
    
    let length = (await page.getByTestId("error").textContent()).length > 5
    expect(length).toBe(true)

    await page.getByTestId('username').fill('standard_user')
    await page.getByTestId('password').fill('secret_sauce')
    await page.getByTestId('login-button').click()
    
    await page.locator('(//div[@class="inventory_item"]/descendant::button)[4]').click()
})

//! OUTPUT

/* Running 1 test using 1 worker
  1 passed (12.0s)

To open last HTML report run:

  npx playwright show-report

*/
