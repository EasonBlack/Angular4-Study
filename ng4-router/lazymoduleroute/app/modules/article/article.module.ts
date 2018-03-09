

import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ArticleComponent}   from './article.component';
import { ArticleRoutingModule } from './article.routing';


@NgModule({
    imports: [
        FormsModule,
        ArticleRoutingModule
    ],
    declarations: [
        ArticleComponent
    ]
})
export class ArticleModule {
}