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
  @Output() childCheckChange = new EventEmitter();

  clickHandle(item) {
    this.selectItem.emit(item)
  }

  selectItemHandle(item) {
    this.selectItem.emit(item)
  }

  toggleExpend(item) {
    item.expand = !item.expand;
  }

  checkedChange(item) {
    //check children
    if(item.children && item.children.length) {
      item.children.forEach(c=>{
        c.checked = item.checked;
        this.checkedChange(c);
      })
    }

    //check parent 
    this.childCheckChange.emit(item);

  }

  childCheckChangeHandle(child) {

    if(child.checked) {
      this.item.checked = true;
    } else {
      let _item = this.item.children.find(c=>c.checked)
      if(!_item) {
        this.item.checked = false;
      }
    }

    this.childCheckChange.emit(this.item);

  }
  
}