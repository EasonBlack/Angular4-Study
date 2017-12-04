import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
    imports: [
        BrowserModule,
        NgxEchartsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}