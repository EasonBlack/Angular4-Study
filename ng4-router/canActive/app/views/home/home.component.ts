
import { Component, OnInit } from '@angular/core';

@Component({
  template: `<div>Home</div>
    <div><button (click)='login()'>Login</button></div>
  `
})
export class HomeComponent implements OnInit {
    constructor() { }
    ngOnInit() {}

    login() {
      localStorage.setItem("loggedInUser","Admin");
    }
}