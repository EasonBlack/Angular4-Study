

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent}   from './app.component';
import {RefComponent} from './component/ref.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent, 
        RefComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}