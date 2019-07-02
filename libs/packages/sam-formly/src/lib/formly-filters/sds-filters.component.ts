import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sds-filters',
  template: `
        <sds-accordion-item>
            <sds-accordion-item-header> {{accordionLabel}} </sds-accordion-item-header>
            <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
        </sds-accordion-item>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SdsFiltersComponent implements OnChanges {
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

    /**
  *  Emit results when model updated
  */
  @Output() filterModel = new EventEmitter<object[]>();

  // Emit the results on changes.
  ngOnChanges(){
    this.filterModel.emit(this.model);
  }

}
