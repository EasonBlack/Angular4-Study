import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RoleService {

  roles = [
    {id: 1, name: 'admin', auth: '1,2'},
    {id: 2, name: 'normal', auth: '2,3'},
    {id: 3, name: 'boss', auth: '4'}
  ]

  constructor(private http: Http) { 

  }

  getRoleData(): Observable<any> {
  	return Observable.of(this.roles);
  }
  addRoleAuth(id, arr) {
    let _role = this.roles.find(role => role.id == id)
    console.log(_role, id);
    _role.auth = arr;
  }
}
