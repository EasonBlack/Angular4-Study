

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent}   from './app.component';
import {BoxComponent} from './box/box.component';
import {BoxesService} from './boxes.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        BoxComponent
    ],
    providers: [
        BoxesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}