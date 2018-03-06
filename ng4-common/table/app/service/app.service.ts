import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getTableData(): Observable<any> {
  	return this.http.get("app/data/data.json");
  }
}
