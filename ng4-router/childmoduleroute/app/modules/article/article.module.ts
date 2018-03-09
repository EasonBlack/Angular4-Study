

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { ArticleComponent}   from './article.component';
import { ArticleRoutingModule } from './article.routing';

import { AuthorComponent } from './author/author.component';
import { ListComponent } from './list/list.component';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ArticleRoutingModule
    ],
    declarations: [
        ArticleComponent,
        AuthorComponent,
        ListComponent
    ]
})
export class ArticleModule {
}