import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    
})
export class AppComponent {
    items = [
        {group: 1, value : 'a'},
        {group: 1, value : 'b'},
        {group: 1, value : 'c'},
        {group: 1, value : 'd'},
        {group: 2, value : 'e'},
        {group: 2, value : 'f'},
        {group: 2, value : 'g'},
        {group: 2, value : 'h'},
        {group: 2, value : 'i'}
    ]
}

