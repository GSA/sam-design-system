import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-file',
  template: `
    <div class="grid-row grid-gap">
      <div
        *ngFor="
          let option of (to.options | formlySelectOptions: field | async);
          let i = index
        "
      >
        <button>
          <div class="sds-card  shadow-none border-width-0 mobile-lg:grid-col">
            <div class="sds-card__header sds-card__header--center">
              <h3 class="sds-card__title ">{{ option.label }}</h3>
            </div>
            <div class="sds-card__body">
              <span class="usa-tag">{{ option.value }}</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  `
})
export class FormlyFieldFileInfoComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: []
    }
  };
}
