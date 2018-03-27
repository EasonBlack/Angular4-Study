

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent}   from './app.component';
import { AppRoutingModule } from './app.routing';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { AuthService} from './services/auth.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}