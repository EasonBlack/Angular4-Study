import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';

import {AppComponent}   from './app.component';
import {TestComponent} from './component/test/test.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        })
    ],
    declarations: [
        AppComponent, 
        TestComponent ,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}