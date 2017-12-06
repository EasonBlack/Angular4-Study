import {Component, ContentChild} from '@angular/core';


@Component({
    selector: 'my-ref',
    templateUrl: './ref.component.html',
    
})
export class RefComponent {
    num = 0;

    add() {
        this.num ++;
    }
    minus() {
        this.num --;
    }
 
}
