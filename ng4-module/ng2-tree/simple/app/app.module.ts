

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppTreeComponent } from './tree/tree.component';

import { TreeModule } from 'ng2-tree';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        TreeModule
    ],
    declarations: [
        AppComponent,
        AppTreeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}