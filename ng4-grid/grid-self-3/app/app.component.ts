import { Component, OnInit } from '@angular/core';
import { BoxesService } from './boxes.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
    grid = {
        x: 5,
        y: 5
    }

    constructor(private boxesService: BoxesService) {
       
    }

    ngOnInit() {  
      
    }

    mouseup(e) {
        console.log(e);
        this.boxesService.dragStop(e);
    }

   
}

