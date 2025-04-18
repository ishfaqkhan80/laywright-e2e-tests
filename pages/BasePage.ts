import { Page, expect } from '@playwright/test'

export class BaseClass {
    protected readonly page : Page

    constructor(page: Page){
        this.page = page
    }

    async waitForLoad(timeout = 10000){
        await this.page.waitForLoadState('load', {timeout})
    }

    async getTitle(){
        return this.page.title()
    }

    async takeScreenshot(path: string, options : {fullPage : true}){
        await this.page.screenshot({ path, ...options })
    }

}