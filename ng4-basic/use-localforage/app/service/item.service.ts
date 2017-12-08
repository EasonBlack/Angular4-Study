import { Injectable } from '@angular/core';
declare var localforage: any;

@Injectable()
export class ItemService {

    add(name: string , num :number) {
        var store = localforage.createInstance({
            name: "test"
        });     
        store.setItem('12', {name: name, num: num});   
    }
}