import {expect, test} from "@playwright/test"

test("demoqa scenario", async ({page}) => {

    let firstName = 'Anonymous'
    let lastName = 'User'
    let password = 'RandomUser@25'
    await page.goto('https://demoqa.com/login')
    await page.click('[id="newUser"]')
    await page.fill('[placeholder="First Name"]', firstName)
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press("Tab")
    await page.keyboard.type(lastName)
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    await page.keyboard.press("Tab")
    await page.keyboard.type(password)

    await page.click('[id="register"]')
    await page.click('[id="gotologin"]')
    await page.fill('[placeholder="UserName"]',firstName)
    await page.fill('[placeholder="Password"]',password)
    await page.click('[id="login"]')
    expect (await page.locator('(//label[@id="userName-label"])[text()="Books : "]').textContent()).toBe("Books : ")
    expect (await page.locator('[id="userName-value"]').textContent()).toContain(firstName)
    await page.click('[id="gotoStore"]')
    await page.click('//span[@id="see-book-Learning JavaScript Design Patterns"]/a')
    console.log(await page.locator('//label[text()="Sub Title : "]/../..//descendant::div[@class="col-md-9 col-sm-12"]').textContent());
    console.log(await page.locator('//label[text()="Total Pages : "]/../..//descendant::div[@class="col-md-9 col-sm-12"]').textContent());
    await page.click('[id="submit"]')
    expect(await page.locator('//form[@id="userForm"]//h2').textContent()).toBe("Welcome,")


    await page.waitForTimeout(2000)
        
})



//* Works in headed/headless mode

/*

athar_nk0za4o@Atharv MINGW64 /y/PW assessment (main)
$ npx playwright test tests/Assessment2/SC_03.spec.js --headed

Running 1 test using 1 worker
[chromium] › tests\Assessment2\SC_03.spec.js:3:5 › demoqa scenario
A JavaScript and jQuery Developer's Guide
254
  1 passed (11.5s)

To open last HTML report run:

  npx playwright show-report
  
*/
















    // await page.locator('[id="firstname"]').pressSequentially(firstName)
    // await page.locator('[placeholder="UserName"]').pressSequentially(firstName)
    // await page.locator('[placeholder="Password"]').pressSequentially(password)
    // await page.locator('[placeholder="Last Name"]').pressSequentially(lastName)

    // await page.locator('[id="firstname"]').pressSequentially(firstName)
    // await page.keyboard.press("Tab")
    // await page.locator('[placeholder="UserName"]').pressSequentially(firstName)
    // await page.keyboard.press("Tab")
    // await page.locator('[placeholder="Password"]').pressSequentially(password)
    // await page.keyboard.press("Tab")
    // await page.locator('[placeholder="Last Name"]').pressSequentially(lastName)

    // await page.keyboard.press('Control+A')
    // await page.keyboard.press('Control+C')
    // await page.click('[placeholder="First Name"]')
    // await page.waitForTimeout(3000)
    // await page.fill('[placeholder="UserName"]',firstName)
    // await page.keyboard.press('Control+V')
    // await page.waitForTimeout(3000)
    // await page.fill('[placeholder="Password"]', password)
    // await page.fill('[placeholder="Last Name"]', lastName)