import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  users = [];
  constructor() { }

  getUser() {
    return this.users;
  }
}