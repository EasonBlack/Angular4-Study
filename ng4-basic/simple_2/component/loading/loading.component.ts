
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
    @Output() closeLoading = new EventEmitter()
    constructor() { }
    ngOnInit() {}
    clickHandle() {
      console.log('xxxxxxxx');
      this.closeLoading.emit(false);
    }
}