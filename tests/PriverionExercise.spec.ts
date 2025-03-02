import { test, expect } from '@playwright/test';

test('Priverion_Exercise',async({ page }) => {


//Reajust screen resolution 

    await page.setViewportSize({width:1024,height:768})

//Login in PriverionPlatform

    await page.goto('https://hwazicsshi-testing.priverion.dev/login')
    await page.getByRole('textbox',{name:'E-Mail Address'}).fill('jeison.herrera1592@gmail.com')
    await page.getByRole('button',{name:'Next'}).click()
    await page.getByRole('textbox',{name:'Password'}).fill('Jeisonpruebapriverion12345@')
    await page.getByRole('button',{name:'Login'}).click()

    await page.pause()

    
    

})
