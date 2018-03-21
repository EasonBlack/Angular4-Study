import {Component, Input, SimpleChanges, ViewChild} from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent  {
    @ViewChild('myForm') private myForm;

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

    actionOutofForm() {
        let res = {
            name: this.newname,
            mobile : this.newmobile,
            email: this.newemail
        }
       
        console.log(res)
        console.log(this.myForm)
    }

   
}

