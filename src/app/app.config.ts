import { PLATFORM_INITIALIZER, importProvidersFrom, inject } from "@angular/core";
import { ApplicationConfig } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {  provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { ThemeManagerService } from "./theme-manager/theme-manager.service";

export const appConfig:ApplicationConfig = {
    providers:[
        importProvidersFrom(BrowserAnimationsModule),
        provideRouter(appRoutes),
        {
            provide:PLATFORM_INITIALIZER,
            useFactory:()=> inject(ThemeManagerService).theme$
        }
    ]
}