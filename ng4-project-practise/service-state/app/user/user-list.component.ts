import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';


@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',    
})
export class UserListComponent  implements OnInit {
    users = []

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getUserData()
        .subscribe(r=>{
            console.log(r);
            this.users = r;
        })
    }

    selectUser(user) {
        console.log('select User');
        this.userService.selectUser(user);
    }

    createUser() {
        this.userService.createEnableHandle(true);
        this.userService.addTestNum();

    }
}   