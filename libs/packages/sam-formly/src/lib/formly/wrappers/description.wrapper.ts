
import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'sam-formly-label-wrapper-form-field',
  template: `
  <div>
  <small *ngIf="to.description" class="form-text text-muted">{{ to.description }}</small>
  <ng-template #fieldComponent></ng-template>
  </div>
  `,
})
export class FormlyDescriptionWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {read: ViewContainerRef}) fieldComponent: ViewContainerRef;
}
