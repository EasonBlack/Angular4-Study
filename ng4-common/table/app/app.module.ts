

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {AppComponent}   from './app.component';
import {TableComponent} from './table/table.component';
import { DataTableModule } from '../../ng-table/ng-table.module';
import { AppService } from './service/app.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DataTableModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        TableComponent
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}