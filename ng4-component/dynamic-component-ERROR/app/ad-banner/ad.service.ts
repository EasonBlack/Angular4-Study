import { Injectable }           from '@angular/core';

import { Ad1Component }   from '../components/ad1.component';
import { Ad2Component } from '../components/ad2.component';
import { AdItem }               from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(Ad1Component,   { body: 'xxxxxxxx!'}),

      new AdItem(Ad2Component,   { body: 'yyyyyyyy!'}),
    ];
  }
}