import { importProvidersFrom } from "@angular/core";
import { ApplicationConfig } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";

export const appConfig:ApplicationConfig = {
    providers:[
        importProvidersFrom(BrowserAnimationsModule),
        provideRouter(appRoutes)
    ]
}