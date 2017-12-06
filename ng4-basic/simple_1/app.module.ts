import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent, MyDivComponent}   from './app.component';
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, MyDivComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}