
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Mappings } from '../common/mapping';

@Injectable()
export class AuthorityService {
  constructor(private http: Http) { }


  getAuthorityList(): Observable<any> {
    let _url = `${Mappings.BaseUrl}authority`;
    return this.http.get(_url);
  }

  makeAuthorityTree(parentId="", items): any {
    let roots = [];
    
    roots.push(...items.filter(item=>item.parentId == parentId));
    roots.forEach(root=>{
      root.children = [];
      root.children.push(...this.makeAuthorityTree(root.id, items));
    })
    return roots;
  }

  addAuthority(authority): Observable<any>  {
    return this.http.post(`${Mappings.BaseUrl}authority`, authority, Mappings.BaseRequestHeader)       
  }

  updateAuthority(authority): Observable<any>  {
    return this.http.put(`${Mappings.BaseUrl}authority`, authority , Mappings.BaseRequestHeader )       
  }
  
}