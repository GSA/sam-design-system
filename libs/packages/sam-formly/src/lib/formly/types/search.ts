import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { AbstractSdsFormly } from '../sds-formly';
import { SdsSearchComponent } from '@gsa-sam/components';

@Component({
  selector: 'sds-formly-field-search',
  template: `
    <sds-search
      [formControl]="formControl"
      (submit)="to.submitHandler && to.submitHandler($event)"
    ></sds-search>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldSearchComponent extends AbstractSdsFormly {
  @ViewChild(SdsSearchComponent, { static: true }) public template: SdsSearchComponent;

  constructor(_cdr: ChangeDetectorRef) {
    super();
    this.cdr = _cdr;
  }
}
