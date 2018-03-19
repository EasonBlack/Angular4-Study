import {Component, Input, SimpleChanges} from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent {
   
    newname = ''
    newmobile = ''
    newemail = ''
    isSubmit = false
    
    constructor() {}
    
    

    actionOnSubmit(form) {
        this.isSubmit = true;
        console.dir(form);
        console.log(form.value)
    }

   
}

