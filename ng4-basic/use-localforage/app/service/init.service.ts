import { Injectable } from '@angular/core';
import {Item} from '../item'

declare var localforage: any;

@Injectable()
export class InitService {
  items: Item[] = [
      {id:1, name: 'aaa', num: 12},
      {id:2, name: 'bbb', num: 13},
      {id:3, name: 'ccc', num: 14},
      {id:4, name: 'ddd', num: 15},
      {id:5, name: 'eee', num: 16},
      {id:6, name: 'fff', num: 17},
      {id:7, name: 'ggg', num: 18}
  ];

  stroreData() {
    var store = localforage.createInstance({
        name: "test"
    });

    for(let i=0;i<this.items.length;i++){
        let _item = this.items[i];
        store.setItem(_item.id, _item);
    } 
  }

}