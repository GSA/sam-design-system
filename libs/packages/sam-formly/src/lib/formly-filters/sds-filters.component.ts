import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-filters',
  template: `
    <sds-accordion multi="true">
        <sds-accordion-item>
            <sds-accordion-item-header> {{accordionLabel}} </sds-accordion-item-header>
            <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
        </sds-accordion-item>
    </sds-accordion>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
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
  *  Accordion Label used to display the Accordion header text.
  */
  @Input() accordionLabel: string = 'Filters';

}
