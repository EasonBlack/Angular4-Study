import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']

})
export class TreeComponent {
  @Input() item: any = {};
  @Input() itemSelected: any = {};
  @Input() settings: any = {};
  @Output() selectItem = new EventEmitter();

  clickHandle(item) {
    this.selectItem.emit(item)
  }

  selectItemHandle(item) {
    this.selectItem.emit(item)
  }

  toggleExpend(item) {
    item.expand = !item.expand;
  }
  
}