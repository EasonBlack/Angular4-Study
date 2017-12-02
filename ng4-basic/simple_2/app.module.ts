import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {TestComponent} from './component/test/test.component';
import {Test2Component} from './component/test2/test2.component';
import {LoadingComponent} from './component/loading/loading.component';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent, 
        TestComponent ,
        Test2Component,
        LoadingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}