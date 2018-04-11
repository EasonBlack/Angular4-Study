

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent}   from './app.component';

import {HighlightDirective} from './directive/highlight.directive';
import {HighlightServiceDirective} from './directive/highlight-service.directive';
import {AccountService} from './services/account.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HighlightDirective,
        HighlightServiceDirective
    ],
    providers: [AccountService],
    bootstrap: [AppComponent]
})
export class AppModule {
}