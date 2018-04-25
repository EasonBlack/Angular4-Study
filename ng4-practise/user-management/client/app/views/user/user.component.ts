import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../services/role.service';
import { forkJoin } from "rxjs/observable/forkJoin";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']

})
export class UserComponent implements OnInit {
  userRows = []
  roleRows = []

  userName = ''
  userId = ''
  userRole = []

  constructor(
    private userService: UserService,
    private roleService: RoleService,
  ) {
  }

  ngOnInit() {

    forkJoin([
      this.userService.getUserList(), 
      this.roleService.getRoleList(),
    ]).subscribe(results => {
        this.userRows = results[0].json();
        this.roleRows = results[1].json();
    });
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
   
    let _roles  = [];
    if( user.role) {
      _roles=  user.role.split(',');
      _roles = _roles.map(role=>{
        let _roleDetail = this.roleRows.find(r=>r.id==role);
        return {
          id: _roleDetail.id,
          name : _roleDetail.name,
          description: _roleDetail.description
        }
      })
      this.userRole = _roles;
    }
  
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

  toggleSelectRole(role) {
    role.selected = !role.selected;
  }

  addRole() {
    let _current = this.userRole.map(u=>u.id);
    let _roles = this.roleRows.filter(r=>r.selected);
    if(this.userId) {
      _roles.forEach(r=>{
        if(_current.indexOf(r.id)==-1){
          this.userRole.push({id: r.id, name: r.name, description: r.description});
        }
      })
    }
  }

  removeRole() {
    let _roles = []
    this.userRole = this.userRole.filter(r=>!r.selected)
  }

  saveRole() {
    let role = this.userRole.map(r=>r.id).join(',');
    this.userService.updateUserRole({id: this.userId, role})
      .subscribe(results=>{
        this.getUserList();
      })
  }
}

