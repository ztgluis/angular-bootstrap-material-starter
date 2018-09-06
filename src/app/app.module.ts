import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from '@app/app.routing';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
