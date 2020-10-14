import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { AbstractSdsFormly } from '../sds-formly';
import { SdsTextComponent } from '@gsa-sam/components'

@Component({
  selector: 'sds-formly-field-text',
  template: `
  <sds-text [formControl]="formControl"></sds-text>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldTextComponent extends AbstractSdsFormly {

  @ViewChild(SdsTextComponent, { static: false }) public template: SdsTextComponent;

  constructor(_cdr: ChangeDetectorRef) {
    super(); /* istanbul ignore next */
    this.cdr = _cdr;
  }
}
