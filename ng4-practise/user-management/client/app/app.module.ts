

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserComponent } from './views/user/user.component';
import { RoleComponent } from './views/role/role.component';
import { AuthorityComponent } from './views/authority/authority.component';
import { AuthorityItemComponent } from './views/components/authority-item/authority-item.component'

import { AppRoutingModule } from './app.routing';

import { UserService } from './services/user.service';
import { RoleService } from './services/role.service';
import { AuthorityService } from './services/authority.service';

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
        RoleComponent,
        AuthorityComponent,
        AuthorityItemComponent
    ],
    providers: [
        UserService,
        RoleService,
        AuthorityService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}