import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService   {
  createEnable = false
  testNum = 0
  users = [
    {id: 1, name: 'aaaa'},
    {id: 2, name: 'bbbb'},
    {id: 3, name: 'cccc'},
    {id: 4, name: 'dddd'},
    {id: 5, name: 'eeee'},
    {id: 6, name: 'ffff'}
  ]
  selectedUser = {
    id: '',
    name: ''
  }

  constructor(private http: Http) {}
  
  getUserData(): Observable<any> {
  	return Observable.of(this.users);
  }

  createEnableHandle(bool) {
    this.createEnable = bool;
  }

  selectUser(user) {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }

  addTestNum() {
    this.testNum ++;
  }
}