
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-accordian-form-field',
  template: `
  <div> Test
  <details>
  <summary>{{ to.label }}-1</summary>
  <ng-container #fieldComponent></ng-container>
</details>
</div>
  `,
})
export class FormlyAccordianFormFieldComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}