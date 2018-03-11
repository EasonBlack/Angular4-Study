

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import {AppComponent}   from './app.component';
import { AppRoutingModule } from './app.routing';

import { DataTableModule } from '../../../ng4-common/ng-table/ng-table.module';

import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { AuthNewModalComponent } from './views/home/authNewModal/auth-new-modal.component';

import {UserService} from './service/user.service';
import {RoleService} from './service/role.service';
import {AuthService} from './service/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        DataTableModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AuthNewModalComponent,
        AboutComponent,

        LeftMenuComponent
    ],
    providers: [UserService, RoleService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}