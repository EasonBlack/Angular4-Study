

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent}   from './app.component';

import {NgxSmoothDnDModule} from 'ngx-smooth-dnd';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgxSmoothDnDModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}