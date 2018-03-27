import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService implements CanActivate {
	constructor(private router: Router) {}
	canActivate(): boolean {
		if(!localStorage.getItem("loggedInUser")) {
			return false;
		}
		else {
			return true;
		}
	}
}