import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
    
})
export class AppComponent implements AfterViewInit {
    @ViewChild('input') button: ElementRef;

    ngAfterViewInit() {
        let buttonStream$ = Observable.fromEvent(this.button.nativeElement, 'click')
            .map((e: MouseEvent) => { return {x: e.clientX}; })
            .debounceTime( 500 )
            .subscribe(res => console.log(res));
    }
}

