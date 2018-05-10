import {Component, Input, SimpleChanges} from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    message = 'testtest';
    items = ["a", 'b']
  
    constructor() {}

   
}

