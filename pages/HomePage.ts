import { Page, expect } from '@playwright/test'

export class HomePage {

    readonly page : Page

    constructor(page: Page){
        this.page = page
    }

    async goto(){
        await this.page.goto('/')
    }
        
    async getTitle(){
        return this.page.title()
    }

    async clickGetStarted(){
        await this.page.getByRole('link', {name : 'Get started'}).click()
    }
}