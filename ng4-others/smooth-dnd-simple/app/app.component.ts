import {Component} from '@angular/core';
import { ContainerComponent, DraggableComponent, IDropResult } from 'ngx-smooth-dnd';
import { applyDrag, generateItems } from './utils';



@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
    
})
export class AppComponent {
    items=[
        {data: "aaaaaa", col: 1},
        {data: "bbbbbb", col: 2},
        {data: "cccccc", col: 1},
        {data: "dddddd", col: 1},
    ]

    onDrop(dropResult: IDropResult) {
    // update item list according to the @dropResult
        this.items = applyDrag(this.items, dropResult);
        console.log(this.items);
    }
}

