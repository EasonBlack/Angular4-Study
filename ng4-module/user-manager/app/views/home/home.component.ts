
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { RoleService } from '../../service/role.service';
import { AuthService } from '../../service/auth.service';

import { forkJoin } from "rxjs/observable/forkJoin";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    userCols = [
        {type: "normal", id: "name", title:"Name"},
        {type: "normal", id: "age", title:"Age"},
        {type: "normal", id: "role", title: "Role"},
        {type: "action", title: "Edit", Func: (o)=>{
            this.editUserRole(o);
        }}
    ]
    userRows = []
    userSelect = ''
    userRoleSelect = ''
    userRoleDisplay = false

    roleCols = [
        {type: "normal", id: "id", title: "ID"},
        {type: "normal", id: "name", title: "Name"},
        {type: "normal", id: "auth", title: "Auth"},
        {type: "action", title: "Edit", Func: (o)=>{
            this.editAuth(o);
        }}
    ]
    roleRows = []
    

    authEdit = false
    authEditId = null
    authCols = [
        {type: "normal", id: "id", title: "ID"},
        {type: "normal", id: "name", title: "Name"}
    ]
    authRows = []
    authNewDisplay = false
    authSelected = []

    constructor(
        private userService: UserService, 
        private roleService: RoleService,
        private authService: AuthService,
    ) { }
    ngOnInit() {

        forkJoin([
            this.userService.getUserData(), 
            this.roleService.getRoleData(),
            this.authService.getAuthData()
        ]).subscribe(results => {
            console.log(results);
            this.userRows = results[0].json();
            this.roleRows = results[1];
            this.authRows = results[2];
        });
    }

    showNewAuthModel() {
        this.authNewDisplay = true;
    }
    closeUserRoleModal(bool) {
        this.userRoleDisplay = bool;
    }
    closeAuthModal(bool) {
        this.authNewDisplay = bool;
    }
    saveAuth(auth) {
        this.authService.addAuth(auth)
    }

    saveUserRole(role) {
        
        let _user = this.userRows.find(user=>user.id == this.userSelect);
        console.log(_user, this.userSelect)
        _user.role = role.id;
    }
    saveRoleAuth() {
        let _auths = this.authRows.filter(row=>row.checked);
        let _ids = _auths.map(au=>au.id);
        this.roleService.addRoleAuth(this.authEditId, _ids);
    }
    editAuth(role) {
        this.authEdit = !this.authEdit ;
        this.authSelected = role.auth;
        this.authEditId = role.id;
    }
    editUserRole(user) {
        this.userSelect = user.id;
        this.userRoleSelect = user.role;
        this.userRoleDisplay = true;
    }
}