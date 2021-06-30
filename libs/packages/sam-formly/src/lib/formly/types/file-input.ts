import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { AbstractSdsFormly } from "../sds-formly";
import { UsaFileInputComponent } from 'ngx-uswds';

@Component({
  selector: `sds-formly-field-file-input`,
  template: `
    <usa-file-input #fileInput [formControl]="formControl" [id]="id"></usa-file-input>
  `,
})
export class FormlyFieldFileInputComponent extends AbstractSdsFormly {
  @ViewChild(UsaFileInputComponent, { static: true }) public template: UsaFileInputComponent;

  constructor(_cdr: ChangeDetectorRef) {
    super(); /* istanbul ignore next */
    this.cdr = _cdr;
  }
}