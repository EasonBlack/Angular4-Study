import {Component} from '@angular/core';
import { Globals } from '../../service/global';

@Component({
    selector: 'my-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss']
    
})
export class ControlComponent {
    constructor(private globals: Globals) {}
    switch() {
        this.globals.styleModel = this.globals.styleModel == 'model2'? 'model1': 'model2';
    }
}

