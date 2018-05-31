import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    items = [
        {name: "aaa1", col: 2, row: 1, x: 0, y: 0, style: {}},
        {name: "bbb1", col: 1, row: 2, x: 1, y: 1, style: {}},
        {name: "ccc1", col: 1, row: 1, x: 2, y: 1, style: {}},
        {name: "ddd1", col: 1, row: 1, x: 2, y: 2, style: {}},
    ]
    grid = {
        x: 5,
        y: 5
    }

    ngOnInit() {  
        this.items = this.items.map(item=>{
            let result = Object.assign(item);
            let strStyle = `translate(${100* item.x}px, ${100*item.y}px)`;
            result.style = {
                width : item.col * 100 + 'px',
                height: item.row * 100 + 'px',
                "transform": strStyle
            }
            return result;
        })
    }

    setPosition(item) {
        let strStyle = `translate(${100* item.x}px, ${100*item.y}px)`;
        item.style = {
            width : item.col * 100 + 'px',
            height: item.row * 100 + 'px',
            "transform": strStyle
        }
    }

    hasConflict(item) {
        
        let conflict = this.items.filter(t=>
            {
                let currentStartX = item.x;
                let currentEndX = item.x + item.col - 1;
                let currentStartY = item.y;
                let currentEndY = item.y + item.row - 1;

                let targetStartX = t.x;
                let targetEndX = t.x + t.col -1;
                let targetStartY = t.y;
                let targetEndY = t.y + t.row - 1;

                return t.name != item.name &&
                (
                    (currentStartX <= targetStartX && targetStartX <= currentEndX ) ||
                    (currentStartX <= targetEndX && targetEndX <= currentEndX ) 
                ) && 
                (
                    (currentStartY <= targetStartY && targetStartY <= currentEndY) ||
                    (currentStartY <= targetEndY && targetEndY <= currentEndY)
                ) 

            }
           
        )
        return conflict;
    }

    isOutOfEdge(item , type , num) {
        if((item[type] + num) < 0 || (item[type] + num) > this.grid[type] ) {
            return true;
        }
        return false;
    }


    up(item) {
        console.log(item);
        if(this.isOutOfEdge(item, 'y', -1)) {
            this.right(item);           
        } else {
            item.y = item.y -1;
            let boxes = this.hasConflict(item)
            if(boxes.length) {
                boxes.forEach(box=>{
                    this.up(box)
                })               
            }  
            this.setPosition(item);
        }
      
    }

    down(item) {
        console.log(item);   
        if(this.isOutOfEdge(item, 'y', 1)) {
            this.left(item);
        } else {
            item.y = item.y  + 1;   
            let boxes = this.hasConflict(item)
            if(boxes.length) {
                boxes.forEach(box=>{
                    this.down(box)
                })               
            }  
            
            this.setPosition(item);
        }    
    }
    
    left(item) {
        console.log(item);  
        if(this.isOutOfEdge(item, 'x', -1)) {
            this.up(item);
        } else {
            item.x -= 1;
            let boxes = this.hasConflict(item)
            if(boxes.length) {
                boxes.forEach(box=>{
                    this.left(box)
                })               
            }  
           
            this.setPosition(item);
        }
               
    }

    right(item) {
        console.log(item);  
        if(this.isOutOfEdge(item, 'x', 1)) {
            this.down(item);
        } else {
            item.x += 1;
            let boxes = this.hasConflict(item)
            if(boxes.length) {
                boxes.forEach(box=>{
                    this.right(box)
                })               
            }        
            this.setPosition(item);   
        }
           
    }
}

