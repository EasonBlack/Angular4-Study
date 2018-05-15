
import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',    
})
export class UserComponent {
    constructor(private userService: UserService) {

    }
}