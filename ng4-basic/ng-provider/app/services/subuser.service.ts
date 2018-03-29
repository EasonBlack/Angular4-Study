import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class SubUserService extends UserService {
  users = [
    { id: "aa", name: "admin" },
    { id: "bb", name: "aaaaaaa" },
  ]

  constructor() {
    super();
  }

  
}