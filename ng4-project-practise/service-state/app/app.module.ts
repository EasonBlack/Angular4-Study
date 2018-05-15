

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import {AppComponent}   from './app.component';
import {UserComponent}   from './user/user.component';
import {UserListComponent}   from './user/user-list.component';
import {UserEditComponent}   from './user/user-edit.component';

import { UserService } from '../services/user.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        UserComponent,
        UserListComponent,
        UserEditComponent
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}