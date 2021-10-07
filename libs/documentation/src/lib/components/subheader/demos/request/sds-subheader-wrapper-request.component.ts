import { Component, Inject } from '@angular/core';

import { SubHeaderWrapperMode } from '@gsa-sam/layouts';

import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './sds-subheader-wrapper-request.component.html',
  styleUrls: ['./sds-subheader-wrapper-request.component.scss'],
  selector: `sds-subheader-wrapper-request-demo`,
})
export class SdsSubheaderWrapperRequestComponent {
  public actionEvent = new BehaviorSubject<string>(null);

  mode = SubHeaderWrapperMode.REQUEST;

  constructor() { }
  ngOnInit() {
    this.actionEvent.subscribe(value => {
      console.log('Action Click: ');
      console.log(value);
    });
  }

}
