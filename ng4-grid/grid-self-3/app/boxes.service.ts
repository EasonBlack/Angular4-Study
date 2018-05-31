import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BoxesService {
    items = [
        {name: "aaa2", col: 2, row: 1, x: 0, y: 0, mx:0, my:0, style: {}, isDragging: false},
        {name: "bbb2", col: 1, row: 2, x: 1, y: 1, mx:0, my:0, style: {}, isDragging: false},
        {name: "ccc2", col: 1, row: 1, x: 2, y: 1, mx:0, my:0, style: {}, isDragging: false},
        {name: "ddd2", col: 1, row: 1, x: 2, y: 2, mx:0, my:0, style: {}, isDragging: false},
    ]
    currentX = 0;
    currentY = 0;

    constructor() {    
    }

    initBox(item) {
        let b = this.items.find(t=>t.name == item.name);
        let _w = item.col * 100 +'px';
        let _h = item.row * 100 +'px';
        let _translate = `translate(${100 * item.x}px, ${100 * item.y}px)`;
        let _style = {
            width: _w,
            height: _h,
            transform:_translate
        }
        b.style = _style;
    }

    dragStop(e) {
        let _current = this.items.find(item=>{
            return item.isDragging
        })
        
        if(!_current) return false

        _current.isDragging = false;

        let _x = 100 * _current.x + e.clientX - this.currentX - 50;
        let _y = 100 * _current.y + e.clientY - this.currentY - 50;
        _current.x = Math.ceil(_x/100); 
        _current.y = Math.ceil(_y/100);
        _current.style["transform"]  = `translate(${100* _current.x }px, ${100*_current.y}px)`;
        console.log(_current);
        this.currentX = 0;
        this.currentY = 0;
    }

    conflictHandle(item, e) {
        let _currentBoxX =item.x * 100 +  e.clientX - this.currentX ;
        let _currentBoxY =item.y * 100 +  e.clientY -this.currentY ;

        let t1 = _currentBoxY + 20;  
        let r1 = item.col * 100 + _currentBoxX - 20;  
        let b1 = item.row * 100 + _currentBoxY - 20;  
        let l1 = _currentBoxX + 20;  

        let _conflictItems = this.items.filter(t=>{
            if(t.name == item.name) return false
            let t2 = t.y * 100;  
            let r2 = t.col * 100 + t.x * 100;  
            let b2 = t.row * 100 + t.y * 100;  
            let l2 = t.x * 100;  
          
            if(t1>b2||r1<l2||b1<t2||l1>r2){  
                return false;  
            }else{  
                return true;  
            }  
            
        })
        console.log(_conflictItems);
        _conflictItems.forEach(t=>{
            t.x += 1;
            t.style["transform"]  = `translate(${100* t.x }px, ${100*t.y}px)`;
        })

    }

}