import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'authority-item',
  templateUrl: './authority-item.component.html',
  styleUrls: ['./authority-item.component.scss']

})
export class AuthorityItemComponent {
  @Input() item: any = {};
}