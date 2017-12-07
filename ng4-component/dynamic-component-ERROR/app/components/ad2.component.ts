import { Component, Input } from '@angular/core';

import { AdComponent }      from '../ad-banner/ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h1>This is Ad2</h1>
      {{data.body}}
    </div>
  `
})
export class Ad2Component implements AdComponent {
  @Input() data: any;

}