import {Component, ContentChild} from '@angular/core';
import {ContentComponent} from '../content/content.component';

@Component({
    selector: 'my-parent',
    templateUrl: './parent.component.html',
    
})
export class ParentComponent {

    @ContentChild(ContentComponent) contentChild: ContentComponent;

    ngAfterContentInit() {
        console.log('AfterContentInit');      
    }

    ngAfterContentChecked(){
        console.log('AfterContentChecked')
    }
}
