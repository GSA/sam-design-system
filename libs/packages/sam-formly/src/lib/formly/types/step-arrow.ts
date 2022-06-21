import { Component, ChangeDetectionStrategy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AbstractSdsFormly } from '../sds-formly';
import { SdsStepArrowComponent } from '@gsa-sam/components';

@Component({
  selector: 'sds-formly-field-autocomplete',
  template: `
    <div class="grid-row">
      <sds-step-arrow [number]="to.number" [status]="to.status"></sds-step-arrow>
      <h3 class="margin-top-205">{{ to.stepTitle }}</h3>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyFieldStepArrowComponent extends AbstractSdsFormly {
  @ViewChild(SdsStepArrowComponent, { static: true }) public template: SdsStepArrowComponent;

  constructor(_cdr: ChangeDetectorRef) {
    super(); /* istanbul ignore next */
    this.cdr = _cdr;
  }
}
