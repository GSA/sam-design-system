import { Component} from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-field-radio',
  templateUrl: './radio.html',
})
export class FormlyFieldRadioComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      options: [],
    },
  };
}
