import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-wrapper-form-field',
  template: `
  <p>test</p>
  <ng-template #fieldComponent></ng-template>
   
  `,
})
export class FormlyWrapperFormFieldComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent!: ViewContainerRef;
}