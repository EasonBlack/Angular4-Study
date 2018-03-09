import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';

import { ListComponent } from './list/list.component';
import { AuthorComponent } from './author/author.component';

export const routes: Routes = [
	{
		path: '',
		component: ArticleComponent,
		children: [
			{
				path: 'list',
				component: ListComponent
			},
			{
				path: 'author',
				component: AuthorComponent
			}
		]
	},
]
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ArticleRoutingModule { }