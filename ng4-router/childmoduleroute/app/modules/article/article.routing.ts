import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'list',
				component: ListComponent,
			},
			{
				path: 'author',
				component: AuthorComponent,
			},
		]
	},


]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ArticleRoutingModule { }