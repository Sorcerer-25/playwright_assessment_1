import {expect, test} from "@playwright/test"

test("demo apps scenario", async ({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.click('//section[@class="poppins text-[15px]"][.="Popups"]')
    await page.click('//section[@class="poppins text-[14px]"][text()="Browser Windows"]')
    let [popup] = await Promise.all([page.waitForEvent("popup"),page.click('//h2[text()="Laptop"]/../button[.="view more"]')])
    for(let i = 1;i<=3;i++)
        await popup.click('//button[.="Add to Cart"]')
    expect(await popup.locator('//section[@class="relative"]/article').textContent()).toBe('3')
    await popup.click('//section[@class="relative"]/article')
    let cartProducts = await popup.locator('//div[@class="space-y-4"]/div').all()
    expect(cartProducts.length).toBe(3)
    
})



//* Works in headed/headless mode

/*

athar_nk0za4o@Atharv MINGW64 /y/PW assessment (main)
$ npx playwright test tests/Assessment2/SC_02.spec.js 

Running 1 test using 1 worker
  1 passed (14.4s)

To open last HTML report run:

  npx playwright show-report  
  
*/