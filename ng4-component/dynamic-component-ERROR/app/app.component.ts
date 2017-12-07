import {Component, OnInit} from '@angular/core';
import { AdService }         from './ad-banner/ad.service';
import { AdItem }            from './ad-banner/ad-item';


@Component({
    selector: 'my-app',
    template: `
    <div>
        <app-add-banner [ads]="ads"></app-add-banner>
    </div>
    `
    
})
export class AppComponent implements OnInit  {
    ads: AdItem[];
    constructor(private adService: AdService) {}
    ngOnInit() {
        this.ads = this.adService.getAds();
    }
}

