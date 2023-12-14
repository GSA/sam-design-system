import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

/**
 * @param string [props.ariaHidden] Hide the label
 * @param string [props.label] Text to be shown for the label
 */
@Component({
  selector: 'sam-formly-filter-wrapper-form-field',
  template: `
    <div class="wrapper-body">
      <div class="sds-accordion__trigger header-label" [attr.aria-hidden]="props.ariaHidden ? 'false' : 'true'">
        {{ props.label }}
      </div>
      <ng-container #fieldComponent></ng-container>
    </div>
  `,
})
export class FormlyFormFieldFilterWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef })
  fieldComponent: ViewContainerRef;
}
