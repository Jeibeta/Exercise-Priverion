import { test, expect } from '@playwright/test';


    const login = async (page) => {

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
    }

    test.beforeEach(async ({ page }) => {
        await login(page)
    })
    
    test('fill and create record test ROPA screen ',async({ page }) => {

            //Fill form and save to create the new register
        
            //goto ROPA documents section
            await page.getByRole('button',{name:'Document'}).click()
            await page.getByRole('link',{name:'Record of Processing Activities'}).click()

            //Assertion create button
            await expect(page.getByRole('button',{name:'Create'})).toBeVisible()

            //Other way for create a record ROPA screen 
            
            const createButton = await page.locator('[id="overview-creation-button"]')
            await createButton.waitFor({state:'visible'})
            await createButton.click()
        
            const createROPA = await page.getByRole('menuitem',{name:'Create ROPA'})
            await createROPA.waitFor({state:'visible'})
            await createROPA.click()

            //Assertion Record of Processing Activities page - Save Button
        
            await expect(page.getByRole('button',{name:'Save'})).toBeVisible()

    
            //Select dropdown status value
    
            const SelectValue_drpdwn_status_ropa = await page.locator('[data-cy="select-type-status"]')
    
            const SelectValueInput = await SelectValue_drpdwn_status_ropa.locator('input[role="combobox"]')
            await SelectValueInput.click()
    
            //Validate the List is beeing show on the screen
            const SelectOptions = await SelectValue_drpdwn_status_ropa.locator('[role="listbox"]')
            await SelectOptions.waitFor({ state: 'visible' })
    
            //Choose option - 0 Draft 1 Active 2 Review 3 Inactive
            const Option = await SelectOptions.locator('#react-select-3-option-1')
            await Option.click()
    
            //Select type dropdown list 
    
            const SelectValue_drpdwn_type_ropa = await page.locator('[data-cy="select-type-type"]')
    
            const SelectValueInput_type = await SelectValue_drpdwn_type_ropa.locator('input[role="combobox"]')
            await SelectValueInput_type.click()
    
            //Validate the List is beeing show on the screen
            const SelectOptions_type = await SelectValue_drpdwn_type_ropa.locator('[role="listbox"]')
            await SelectOptions_type.waitFor({ state: 'visible' })
    
            //Choose option - 0 Processor 1 Controller 2 Joint Controller 
    
            const Option_type = await SelectOptions_type.locator('#react-select-5-option-2')
            await Option_type.click()
    
            //Select Target Risk dropdown list 
    
            const SelectValue_drpdwn_select_type_target_risk = await page.locator('[data-cy="select-type-target-risk-dropdown"]')
    
            const SelectValueInput_type_risk = await SelectValue_drpdwn_select_type_target_risk.locator('input[role="combobox"]')
            await SelectValueInput_type_risk.click()
    
            //Validate the List is beeing show on the screen
            const SelectOptions_type_risk = await SelectValue_drpdwn_select_type_target_risk.locator('[role="listbox"]')
            await SelectOptions_type_risk.waitFor({ state: 'visible' })
    
            //Choose option - 0 Low 1 Medium 2 High 3 Very High 
    
            const Option_type_risk = await SelectOptions_type_risk.locator('#react-select-8-option-1')
            await Option_type_risk.click()
    
            // Values for the form
            const name = 'Customer Support_4'
            const description_proccess = 'Collecting and managing customer data like name, contact details, issue descriptions to provide technical support.'
            const NeedToProccess = 'Critical to resolving customer issues, improving customer satisfaction, and enhancing service quality.'
    
            //Fill Textbox
            await page.getByRole('textbox',{name:'Name'}).fill(name)
            await page.getByRole('textbox',{name:'Brief description of processing'}).fill(description_proccess)
            await page.getByRole('textbox',{name:'Brief Description why this processing is important to your organization'}).fill(NeedToProccess)
    
            await page.getByRole('button',{name:'Save'}).click()
        
    })

    test('fill and create ROPA record test',async({ page }) => {

    //Fill form and save to create the new register

        //Go to Record of Processing Activities Module
    
        await page.locator('.main-header__create-button').click()
        await page.getByRole('link',{name:'Record of Processing Activities'}).waitFor()
        await page.getByRole('link',{name:'Record of Processing Activities'}).click()
        
        //Assertion Record of Processing Activities page - Save Button
        
        await expect(page.getByRole('button',{name:'Save'})).toBeVisible()

        //Select dropdown status value

        const SelectValue_drpdwn_status_ropa = await page.locator('[data-cy="select-type-status"]')

        const SelectValueInput = await SelectValue_drpdwn_status_ropa.locator('input[role="combobox"]')
        await SelectValueInput.click()

        //Validate the List is beeing show on the screen
        const SelectOptions = await SelectValue_drpdwn_status_ropa.locator('[role="listbox"]')
        await SelectOptions.waitFor({ state: 'visible' })

        //Choose option - 0 Draft 1 Active 2 Review 3 Inactive
        const Option = await SelectOptions.locator('#react-select-3-option-1')
        await Option.click()

        //Select type dropdown list 

        const SelectValue_drpdwn_type_ropa = await page.locator('[data-cy="select-type-type"]')

        const SelectValueInput_type = await SelectValue_drpdwn_type_ropa.locator('input[role="combobox"]')
        await SelectValueInput_type.click()

        //Validate the List is beeing show on the screen
        const SelectOptions_type = await SelectValue_drpdwn_type_ropa.locator('[role="listbox"]')
        await SelectOptions_type.waitFor({ state: 'visible' })

        //Choose option - 0 Processor 1 Controller 2 Joint Controller 

        const Option_type = await SelectOptions_type.locator('#react-select-5-option-2')
        await Option_type.click()

        //Select Target Risk dropdown list 

        const SelectValue_drpdwn_select_type_target_risk = await page.locator('[data-cy="select-type-target-risk-dropdown"]')

        const SelectValueInput_type_risk = await SelectValue_drpdwn_select_type_target_risk.locator('input[role="combobox"]')
        await SelectValueInput_type_risk.click()

        //Validate the List is beeing show on the screen
        const SelectOptions_type_risk = await SelectValue_drpdwn_select_type_target_risk.locator('[role="listbox"]')
        await SelectOptions_type_risk.waitFor({ state: 'visible' })

        //Choose option - 0 Low 1 Medium 2 High 3 Very High 

        const Option_type_risk = await SelectOptions_type_risk.locator('#react-select-8-option-1')
        await Option_type_risk.click()

        // Values for the form
        const name = 'Customer Support_5'
        const description_proccess = 'Collecting and managing customer data like name, contact details, issue descriptions to provide technical support.'
        const NeedToProccess = 'Critical to resolving customer issues, improving customer satisfaction, and enhancing service quality.'

        //Fill Textbox
        await page.getByRole('textbox',{name:'Name'}).fill(name)
        await page.getByRole('textbox',{name:'Brief description of processing'}).fill(description_proccess)
        await page.getByRole('textbox',{name:'Brief Description why this processing is important to your organization'}).fill(NeedToProccess)

        //Saves and create
        await page.getByRole('button',{name:'Save'}).click()
    
})

    test('Delete Record ROPA',async({ page }) => {

        //goto ROPA documents section
        await page.getByRole('button',{name:'Document'}).click()
        await page.getByRole('link',{name:'Record of Processing Activities'}).click()

        //Assertion create button
        await expect(page.getByRole('button',{name:'Create'})).toBeVisible()

        //Select records to delete
        await page.locator('input[name="select-all"]').click()
        
        //Identify if the delete Icon is been show on the screen
        const DeleteIcon = await page.locator('[data-icon="trash"]')
        await DeleteIcon.waitFor({state:'visible'})
        await DeleteIcon.click()

        //Confirm Action
        const Check = await page.locator('svg[data-icon="circle-check"]')
        await Check.waitFor({state:'visible'})
        await Check.click()

        //Delete records sucess
        const DeleteSucces = await page.locator('span:has-text("There is no data to load")')
        await expect(DeleteSucces).toBeVisible()

        
    })

    test('Edit Record ROPA',async({ page }) => {

        //goto ROPA documents section
        await page.getByRole('button',{name:'Document'}).click()
        await page.getByRole('link',{name:'Record of Processing Activities'}).click()

        //Assertion create button
        await expect(page.getByRole('button',{name:'Create'})).toBeVisible()

        //Select Record To edit - row position
        const RecordToEdit = await page.locator('[data-cy="row-0"]')
        await RecordToEdit.click()

        //Press edit button and go to Edit screen
        const EditButton = await page.getByRole('button',{name:'Edit'})
        await expect(EditButton).toBeVisible()
        await EditButton.click()

        //Assertion Record of Processing Activities page - Save Button
         await expect(page.getByRole('button',{name:'Save'})).toBeVisible()
        
        //Time for doing changes on the form 
        await page.waitForTimeout(3000)

        //Saves changes
        await page.getByRole('button',{name:'Save'}).click()
        await expect(EditButton).toBeVisible()

    })
