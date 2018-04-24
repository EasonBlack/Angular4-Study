

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import {AppComponent}   from './app.component';
import {UserComponent}   from './views/user/user.component';
import {RoleComponent}   from './views/role/role.component';
import { AppRoutingModule } from './app.routing';

import {UserService} from './services/user.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        UserComponent,
        RoleComponent
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}