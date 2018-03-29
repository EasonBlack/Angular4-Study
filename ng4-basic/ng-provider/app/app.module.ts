

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {AppComponent}   from './app.component';
import {UserService} from './services/user.service';
import {SubUserService} from './services/subuser.service';
import {DuckService} from './services/duck.servcie';
import {AnimalAbstractService} from './services/animal.abstract.service'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        {provide: UserService, useClass: SubUserService}, 
        {provide: AnimalAbstractService, useClass: DuckService}, 
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}