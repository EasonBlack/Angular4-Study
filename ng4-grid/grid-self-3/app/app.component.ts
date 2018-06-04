import { Component, OnInit, HostListener } from '@angular/core';
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

    @HostListener('document:mouseup', ['$event'])
    onMouseUp(ev:MouseEvent) {
       this.boxesService.dragStop(ev);
    }

    // mouseup(e) {
    //     console.log(e);
    //     this.boxesService.dragStop(e);
    // }

   
}

