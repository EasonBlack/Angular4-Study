

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent}   from './app.component';
import { GridsterModule } from 'angular-gridster2';
import { HelloWorld1} from './hello1.component';
import { HelloWorld2} from './hello2.component';
import { HelloWorld3} from './hello3.component';
import { HelloWorld4} from './hello4.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        GridsterModule
    ],
    declarations: [
        AppComponent,
        HelloWorld1,
        HelloWorld2,
        HelloWorld3,
        HelloWorld4,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}