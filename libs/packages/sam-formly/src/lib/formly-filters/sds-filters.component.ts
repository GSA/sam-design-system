import {
  Component,
  Input,
  Output,
  EventEmitter,
  Optional
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';

@Component({
  selector: 'sds-filters',
  template: `
    {{ model | json }}
    <formly-form
      [form]="form"
      [fields]="fields"
      [options]="options"
      [model]="model"
      (modelChange)="onModelChange($event)"
    ></formly-form>
  `
})
export class SdsFiltersComponent {

  /**
   * Pass in a Form Group for ReactiveForms Support
   */
  @Input() public form: FormGroup;

  /**
   *  Fields are used to configure the UI components
   */
  @Input() public fields: FormlyFieldConfig[];

  /**
   *  Model used to display the filter values.
   */
  @Input() public model: any;

  /**
   *    Options for the form.
   */
  @Input() public options: FormlyFormOptions = {};

  /**
   *  Emit results when model updated
   */
  // TODO: check type -- Formly models are typically objects
  @Output() filterChange = new EventEmitter<object[]>();

  /**
   * debounce time for current page input
   */
  // TODO: ensure no teams are using and remove
  @Input() debounceTime = 0;

  constructor(
    @Optional()
    private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService
  ) {}

  onModelChange(model: any) {
    this.filterChange.emit(model);
    if (this.formlyUpdateComunicationService) {
      this.formlyUpdateComunicationService.updateFilter(model);
    }
  }
}
