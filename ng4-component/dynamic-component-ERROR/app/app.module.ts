

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent}   from './app.component';

import { AdBannerComponent }    from './ad-banner/ad-banner.component';
import { Ad2Component }   from './components/ad2.component';
import { Ad1Component }   from './components/ad1.component';
import { AdDirective }          from './ad-banner/ad.directive';
import { AdService }            from './ad-banner/ad.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    
    declarations: [
        AppComponent,
        AdBannerComponent,
        Ad1Component,
        Ad2Component
    ],
    entryComponents: [ Ad1Component, Ad2Component ],
    providers: [AdService],
    bootstrap: [AppComponent]
})
export class AppModule {
}