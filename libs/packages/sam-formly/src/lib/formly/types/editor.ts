import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { AbstractSdsFormly } from '../sds-formly';
import { SdsEditorComponent } from '@gsa-sam/components'

@Component({
  selector: 'sds-formly-field-editor',
  template: `
  <sds-text [formControl]="formControl"></sds-text>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldEditorComponent extends AbstractSdsFormly {

  @ViewChild(SdsEditorComponent, { static: true }) public template: SdsEditorComponent;

  constructor(_cdr: ChangeDetectorRef) {
    super(); /* istanbul ignore next */
    this.cdr = _cdr;
  }
}
