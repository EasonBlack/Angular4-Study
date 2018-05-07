import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']

})
export class TreeComponent {
  @Input() item: any = {};


  clickHandle(item) {
    item.selected = true;
  }

  selectItemHandle(item) {
    item.selected = true;
  }

  toggleExpend(item) {
    item.expand = !item.expand;
  }
  
}