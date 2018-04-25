import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Mappings } from '../common/mapping';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getUserList(): Observable<any> {
    let _url = `${Mappings.BaseUrl}users`;
    return this.http.get(_url);
  }

  addUser(user): Observable<any>  {
    return this.http.post(`${Mappings.BaseUrl}users`, user, Mappings.BaseRequestHeader)       
  }

  updateUser(user): Observable<any>  {
    return this.http.put(`${Mappings.BaseUrl}users`, user,	Mappings.BaseRequestHeader)       
  }

  updateUserRole(user): Observable<any>  {
    let headers = new Headers({ 'Content-Type': 'multipart/form-data; charset=UTF-8' })
    let fd = new FormData();
    fd.append('role', user.role);
    return this.http.put(`${Mappings.BaseUrl}users/${user.id}/roles`, fd )       
  }
}