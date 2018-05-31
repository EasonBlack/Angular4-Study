import { Component, OnInit, Input } from '@angular/core';
import {BoxesService} from '../boxes.service';

@Component({
    selector: 'box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
    @Input() item: any = {};

   

    constructor(private boxesService: BoxesService) {

    }

    ngOnInit() {  
        this.boxesService.initBox(this.item);
    }

    mousedown(e) {
        this.item.isDragging = true;
        this.boxesService.currentX = e.clientX;
        this.boxesService.currentY = e.clientY;
        console.log(e);
    }

    mousemove(e) {
        if(this.item.isDragging) {
            let _x = e.clientX - this.boxesService.currentX;
            let _y = e.clientY - this.boxesService.currentY ;
            let _translate = `translate(${100* this.item.x + _x }px, ${100*this.item.y + _y}px)`;
            this.item.style.transform = _translate;  
            this.boxesService.conflictHandle(this.item, e);
        }
    }
}