import { Component } from '@angular/core';

@Component({
  selector: 'sds-subheader-sample',
  templateUrl: 'subheader-sample.component.html'
})
export class SubheaderSampleComponent {
  log(value) {
    console.log(value);
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
