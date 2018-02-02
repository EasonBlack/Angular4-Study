import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    
})
export class AppComponent {
   
    param = {value: 'world'};
    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
    
}

