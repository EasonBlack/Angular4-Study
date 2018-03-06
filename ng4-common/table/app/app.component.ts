import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { AppService } from './service/app.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None 
    
})
export class AppComponent  implements OnInit {
    cols = [
        {id: "name", title:"Name"},
        {id: "age", title:"Age"},
    ]
    rows = []

    constructor(private service: AppService) {}

    ngOnInit() {
        this.service.getTableData().subscribe(response => {
            this.rows =response.json();
            console.log(this.rows);
        });	
    }
}

