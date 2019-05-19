import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '@app/app.component';
import { RoutingModule } from '@app/app.routing';
import { SharedModule } from '@app/shared';

export function getBaseHref(platformLocation: PlatformLocation): string {
    return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        SharedModule
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useFactory: getBaseHref,
            deps: [PlatformLocation]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
