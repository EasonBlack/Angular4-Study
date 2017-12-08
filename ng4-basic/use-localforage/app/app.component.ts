import {Component , ElementRef, OnInit} from '@angular/core';
declare var localforage: any;
import { InitService } from './service/init.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
    
})
export class AppComponent implements OnInit  {
    constructor(private service: InitService){}
    ngOnInit():any{
        this.service.stroreData()
    }
}

