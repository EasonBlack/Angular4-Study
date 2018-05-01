import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'authority-item',
  templateUrl: './authority-item.component.html',
  styleUrls: ['./authority-item.component.scss']

})
export class AuthorityItemComponent {
  @Input() item: any = {};
  @Output() selectItem  = new EventEmitter()

  clickHandle(item) {
    this.selectItem.emit(item);
  }

  selectItemHandle(item) {
    this.selectItem.emit(item);
  }

  
}