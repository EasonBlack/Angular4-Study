

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent}   from './app.component';
import {BoxComponent} from './component/box/box.component';
import {ControlComponent} from './component/control/control.component';

import {Globals} from './service/global';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        BoxComponent,
        ControlComponent
    ],
    providers: [
        Globals 
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}