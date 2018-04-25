import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './views/user/user.component';
import { RoleComponent } from './views/role/role.component';
import { AuthorityComponent } from './views/authority/authority.component';


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
		path: 'authority',
		component: AuthorityComponent,
	},

	{
		path: '**',
		component: UserComponent	
	}

]

@NgModule({
	imports: [RouterModule.forRoot(routes,  { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule { }