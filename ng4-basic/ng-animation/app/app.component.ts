import {Component} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('myState', [
          state('inactive', style({
            backgroundColor: '#eee',
            transform: 'scale(1)'
          })),
          state('active',   style({
            backgroundColor: '#cfd8dc',
            transform: 'scale(1.1)'
          })),
          transition('inactive => active', animate('100ms ease-in')),
          transition('active => inactive', animate('100ms ease-out'))
        ]),
        trigger('myMenuState', [
          state('inactive', style({
            opacity: 0,
            transform: 'translateY(-100px)',
            display: 'none'
          })),
          state('active',   style({
            opacity: 1,
            transform: 'translateY(0px)',
            display: 'block'
          })),
          transition('inactive => active', animate('500ms ease-in')),
          transition('active => inactive', animate('500ms ease-out'))
        ])
      ]
    
})
export class AppComponent {
    
    state = 'active';
    menuState = 'inactive';

    toggleMenu() {
      this.menuState = this.menuState === 'active' ? 'inactive' : 'active';
    }

    toggleState() {
      this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}

