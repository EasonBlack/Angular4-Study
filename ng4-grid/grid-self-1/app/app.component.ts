import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    items = [
        {name: "aaa", col: 1, row: 1, x: 0, y: 0, style: {}},
        {name: "bbb", col: 1, row: 1, x: 1, y: 1, style: {}},
        {name: "ccc", col: 1, row: 1, x: 1, y: 2, style: {}},
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
                "transform": strStyle
            }
            return result;
        })
    }

    setPosition(item) {
        let strStyle = `translate(${100* item.x}px, ${100*item.y}px)`;
        item.style = {
            "transform": strStyle
        }
    }

    hasConflict(item) {
        let conflict = this.items.find(t=>t.x==item.x && t.y == item.y && t.name!=item.name)
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
            let box = this.hasConflict(item)
            if(box) {
                this.up(box)
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
            let box = this.hasConflict(item)
            if(box) {
                this.down(box)
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
            let box = this.hasConflict(item)
            if(box) {
                this.left(box)
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
            let box = this.hasConflict(item)
            if(box) {
                this.right(box)
            }  
            this.setPosition(item);   
        }
           
    }
}

