import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AccountService {
    auths = [
        {id: 1, name: 'admin', color: 'red'},
        {id: 2, name: 'normal', color: 'steelblue'}
    ]

    constructor() { }

    getAccountColor(name) : string {
      let a = this.auths.find(au=>au.name==name);
      return a.color;
    }

   
}
