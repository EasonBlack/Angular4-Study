import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    
})
export class AppComponent implements OnInit {
   
    param = {value: 'world'};
    nameTitle=''
    genderTitle = ''

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
    
    ngOnInit() {
        this.translate.get(["name", "gender"]).subscribe(response => {
            this.nameTitle= response["name"];
            this.genderTitle= response["gender"];
        })
	}
}

