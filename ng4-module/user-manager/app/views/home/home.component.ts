
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
        {id: "name", title:"Name"},
        {id: "age", title:"Age"},
        {id: "role", title: "Role"}
    ]
    userRows = []
    roleCols = [
        {id: "id", title: "ID"},
        {id: "name", title: "Name"},
        {id: "auth", title: "Auth"}
    ]
    roleRows = []

    authCols = [
        {id: "id", title: "ID"},
        {id: "name", title: "Name"}
    ]
    authRows = []
    authNewDisplay = false

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

    closeAuthModal(bool) {
        console.log(123);
        this.authNewDisplay = bool;
    }
}