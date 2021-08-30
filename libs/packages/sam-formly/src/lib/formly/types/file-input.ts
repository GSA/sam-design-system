import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { AbstractSdsFormly } from "../sds-formly";
import { UsaFileInputComponent } from '@gsa-sam/ngx-uswds';

@Component({
  selector: `sds-formly-field-file-input`,
  template: `
    <usa-file-input #fileInput 
      [formControl]="formControl" 
      [id]="id">
    </usa-file-input>

    <ng-container *ngIf="field.fieldArray">
      <div class="margin-top-2"></div>
      <formly-form [fields]="[field.fieldArray]" [form]="formControl" [model]="model"></formly-form>
    </ng-container> 
  `
})
export class FormlyFieldFileInputComponent extends AbstractSdsFormly {
  @ViewChild(UsaFileInputComponent, { static: true }) public template: UsaFileInputComponent;

  constructor(_cdr: ChangeDetectorRef) {
    super();
    this.cdr = _cdr;
  }
}