

import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ArticleComponent}   from './article.component';
import { ArticleRoutingModule } from './article.routing';
import { ListComponent } from './list/list.component';
import { AuthorComponent } from './author/author.component';


@NgModule({
    imports: [
        FormsModule,
        ArticleRoutingModule
    ],
    declarations: [
        ArticleComponent,
        ListComponent,
        AuthorComponent
    ]
})
export class ArticleModule {
}