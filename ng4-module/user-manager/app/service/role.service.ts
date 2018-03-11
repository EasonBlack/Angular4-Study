import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RoleService {

  roles = [
    {id: 1, name: 'admin', auth: '1,2'},
    {id: 1, name: 'admin', auth: '2,3'}
  ]

  constructor(private http: Http) { 

  }

  getRoleData(): Observable<any> {
  	return Observable.of(this.roles);
  }
}
