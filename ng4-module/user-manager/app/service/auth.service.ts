import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
    auths = [
        {id: 1, name: 'a_create'},
        {id: 2, name: 'a_update'},
        {id: 3, name: 'b_update'},
        {id: 4, name: 'b_update'}
    ]

    constructor(private http: Http) { }

    getAuthData(): Observable<any> {
        return Observable.of(this.auths);
    }
}
