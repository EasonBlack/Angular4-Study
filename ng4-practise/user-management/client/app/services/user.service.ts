import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getUserList(): Observable<any> {
    let _url = "http://localhost:8080/users"
    return this.http.get(_url);
  }

  addUser(user): Observable<any>  {
    let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' }); 
    return this.http.post("http://localhost:8080/users", user,	{headers})       
  }

  updateUser(user): Observable<any>  {
    let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' }); 
    return this.http.put("http://localhost:8080/users", user,	{headers})       
  }
}