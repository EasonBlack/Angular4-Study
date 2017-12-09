import {Component} from '@angular/core';
import { Globals } from './service/global';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
    
})
export class AppComponent {
    constructor(private globals: Globals) {
    }
}

