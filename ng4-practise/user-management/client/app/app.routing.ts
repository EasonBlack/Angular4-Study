import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './views/user/user.component';
import { RoleComponent } from './views/role/role.component';


export const routes: Routes = [
	{
		path: '',
		redirectTo: '/user',
		pathMatch: 'full',
	},

	{
		path: 'user',
		component: UserComponent,
	},

	{
		path: 'role',
		component: RoleComponent,
	},

	{
		path: '**',
		component: UserComponent	
	}

]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }