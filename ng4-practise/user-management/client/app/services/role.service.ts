import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Mappings } from '../common/mapping';

@Injectable()
export class RoleService {
  constructor(private http: Http) { }


  getRoleList(): Observable<any> {
    let _url = `${Mappings.BaseUrl}roles`;
    return this.http.get(_url);
  }

  addRole(role): Observable<any>  {
    return this.http.post(`${Mappings.BaseUrl}roles`, role, Mappings.BaseRequestHeader)       
  }

  updateRole(role): Observable<any>  {
    return this.http.put(`${Mappings.BaseUrl}roles`, role , Mappings.BaseRequestHeader )       
  }
}