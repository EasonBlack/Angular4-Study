
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'user-role-modal',
    templateUrl: './user-role-modal.component.html'
})
export class UserRoleModalComponent implements OnInit {
    @Input() roles = []
    @Input() roleSelect
    @Output() closeModal = new EventEmitter()
    @Output() saveUserRole = new EventEmitter()
    newRoleId = ''

    constructor() { }
    ngOnInit() {}

    close() {
        this.closeModal.emit(false);
    }

    save() {  
        console.log(this.newRoleId);     
        this.saveUserRole.emit({id: this.newRoleId});
    }

    selectRole(o) {
        this.newRoleId = o;
    }
}