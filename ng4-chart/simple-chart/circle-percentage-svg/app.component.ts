

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.css']
})
export class AppComponent implements OnInit {

    width = 200;
    num = 75;
    dasharray = '';
    dashoffset = ''
    

    ngOnInit() {
        const radius = (this.width - 25)/2;
        
        const r = (this.width - 25) * Math.PI;
        const  o = (this.num /100) * r;
        this.dasharray  = `${o}px ${r}px`;
        this.dashoffset =  `${o}px`;
    }
  
}

