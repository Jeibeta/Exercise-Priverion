import { test, expect } from '@playwright/test';

test('Priverion_Exercise',async({ page }) => {


//Resize screen resolution 

    await page.setViewportSize({width:1024,height:768})

//Login in PriverionPlatform - Fill in email and password to access

    await page.goto('https://hwazicsshi-testing.priverion.dev/login')
    await page.getByRole('textbox',{name:'E-Mail Address'}).fill('jeison.herrera1592@gmail.com')
    await page.getByRole('button',{name:'Next'}).click()
    await page.getByRole('textbox',{name:'Password'}).fill('Jeisonpruebapriverion12345@')
    await page.getByRole('button',{name:'Login'}).click()

//Assertion Home page - Task Monitor Element

    await expect(page.locator('.dashboard-title[data-cy="subtitle-task_monitor"]')).toBeVisible()

//Go to Record of Processing Activities Module

    await page.locator('.main-header__create-button').click()
    await page.getByRole('link',{name:'Record of Processing Activities'}).waitFor()
    await page.getByRole('link',{name:'Record of Processing Activities'}).click()
    
//Assertion Record of Processing Activities page - Save Button

    await expect(page.getByRole('button',{name:'Save'})).toBeVisible()

//Fill form and save to create the new register

    //Select dropdown status value

    const SelectValue_drpdwn_status_ropa = await page.locator('[data-cy="select-type-status"]');

// Hacer clic en el input para abrir el dropdown
    const SelectValueInput = await SelectValue_drpdwn_status_ropa.locator('input');
    await SelectValueInput.click();

    const SelectOptions = await SelectValue_drpdwn_status_ropa.locator('[role="listbox"]');
    await SelectOptions.waitFor({ state: 'visible' });

    const Option = await SelectOptions.locator('#react-select-3-option-1');
    await Option.click();

    await page.pause()

    // Values for the form
    const name = 'Customer Support_1'
    const description_proccess = 'Collecting and managing customer data like name, contact details, issue descriptions to provide technical support.'
    const NeedToProccess = 'Critical to resolving customer issues, improving customer satisfaction, and enhancing service quality.'

    //Fill Textbox
    await page.getByRole('textbox',{name:'Name'}).fill(name)
    await page.getByRole('textbox',{name:'Brief description of processing'}).fill(description_proccess)
    await page.getByRole('textbox',{name:'Brief Description why this processing is important to your organization'}).fill(NeedToProccess)

    await page.getByRole('button',{name:'Save'}).click()

    await page.pause()

    
})
