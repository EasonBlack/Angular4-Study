
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'auth-new-modal',
    templateUrl: './auth-new-modal.component.html',
    styleUrls: ['./auth-new-modal.component.scss'],
})
export class AuthNewModalComponent implements OnInit {

    @Output() closeModal = new EventEmitter()

    constructor() { }
    ngOnInit() {}

    close() {
        this.closeModal.emit(false);
    }
}