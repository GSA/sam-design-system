import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  OnChanges, Optional, OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { SearchListComunicationService } from '@gsa-sam/components';

@Component({
  selector: 'sds-filters',
  template: `
        <sds-accordion-item>
            <sds-accordion-item-header> {{accordionLabel}} </sds-accordion-item-header>
            <formly-form [form]="form" (modelChange)="modelChange.next($event)" [fields]="fields" [model]="model"></formly-form>
        </sds-accordion-item>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SdsFiltersComponent implements OnInit {
  ngOnInit(): void {
    this.modelChange.subscribe((change) => {
      this.filterChange.emit(change);
      if (this.searchListComunicationService) {
        this.searchListComunicationService.updateFilter(change);
      }
    })
  }

  constructor(@Optional() private searchListComunicationService: SearchListComunicationService) { }

  modelChange = new Subject<any>();

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
  @Output() filterChange = new EventEmitter<object[]>();

}
