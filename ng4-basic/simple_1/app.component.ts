import {Component, Input, SimpleChanges} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
<h1>My First Angular 4</h1>
<div my-div [myMessage]='message'></div>

<input #phone placeholder="phone number">
<button (click)="callPhone(phone.value)">Call</button>
<input type='text' [(ngModel)]='message' />
<span>{{message}}</span>
`
})
export class AppComponent {
    message = 'testtest';
    constructor() {}
    callPhone(value) {
        alert(value)
    }

   
}

@Component({
    selector: '[my-div]',
    template: `
        <span>This is my div component</span>
        <input type="text" [value]="myValue"/>
        <span>{{myValue}}</span>
        <div>{{myMessage}}</div>
    `
})
export class MyDivComponent {
    @Input() myMessage: string;
    myValue='aaaaa';
    ngOnChanges(changes: SimpleChanges) {
        console.log(this.myMessage);
        for (let propName in changes) {    
             let chng = changes[propName];
             let cur  = JSON.stringify(chng.currentValue);
             let prev = JSON.stringify(chng.previousValue);
             console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }
    ngDoCheck() {
        console.log('do check happened!!');
    }
}