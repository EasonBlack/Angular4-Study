import {Component , ElementRef, OnInit} from '@angular/core';
declare var $ : any;
declare var localforage: any;

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
    
})
export class AppComponent implements OnInit  {
    constructor(public _elementRef: ElementRef){}
    ngOnInit():any{
        var store = localforage.createInstance({
            name: "test"
        });
        store.setItem("name", "Eason");
        $(this._elementRef.nativeElement).on('click',function(){
            console.log(123);
          
        })
       
       
    }
}

