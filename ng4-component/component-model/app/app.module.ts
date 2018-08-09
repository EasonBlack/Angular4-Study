

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent}   from './app.component';
import {DemoComponent} from './component/demo.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        DemoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}