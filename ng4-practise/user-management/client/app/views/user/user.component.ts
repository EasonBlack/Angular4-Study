import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']

})
export class UserComponent implements OnInit {
  userRows = []
  userName = ''
  userId = ''

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUserList()
      .subscribe(results => {
        this.userRows = results.json();
      });
  }

  selectUser(user) {
    this.userId = user.id;
    this.userName = user.name;
  }

  saveUser() {
    if(!this.userName) {
      return false;
    }
    if(this.userId) {
      this.userService.updateUser({id: this.userId, name: this.userName})
      .subscribe(results=>{
        this.getUserList();
      })
    } else {
      this.userService.addUser({name: this.userName})
      .subscribe(results=>{
        this.getUserList();
      })
    }
    
  }
}

