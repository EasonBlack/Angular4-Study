import {Component, Input} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',    
})
export class UserEditComponent {
    @Input('selectedUser') 
    set setSelectedUser(selectedUser: any) {
        this.userId = selectedUser.id;
        this.userName = selectedUser.name;
    }

    userId = ''
    userName = ''

    constructor(private userService: UserService) {
       
    }

    saveUser() {
        
    }
}