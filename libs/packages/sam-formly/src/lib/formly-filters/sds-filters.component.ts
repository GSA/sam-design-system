import {
  Component, Input, Output,
  ChangeDetectionStrategy,
  EventEmitter, Optional, OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { pairwise } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sds-filters',
  template: `
      <formly-form [form]="form" (modelChange)="modelChange.next($event)" [fields]="fields" [model]="model"></formly-form>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SdsFiltersComponent implements OnInit {

  /**
   * Modeal update
   */
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

  private queryParams = {};

  constructor(@Optional() private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.form.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        this.queryParams = this.getKeyValueFilters(next);
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: this.queryParams,
          queryParamsHandling: 'merge',
        });
        this.filterChange.emit(next);
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(next);
        }
      });
  }

  getKeyValueFilters(filters) {
    // Hard coding approach + key value pair filters
    let parameters = {};
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        parameters = Object.assign(parameters, ...filters[key]);
      }
    }
    Object.keys(parameters).forEach(key => {
      if (parameters[key] === "") {
        parameters[key] = null;
      } else if (parameters[key] instanceof Date) {
        parameters[key] = parameters[key].toLocaleDateString();
      }
      else if (parameters[key] !== null && typeof (parameters[key]) === 'object') {
        Object.keys(parameters[key]).forEach(k => {
          if (parameters[key][k] instanceof Date) {
            parameters[key][k] = parameters[key][k].toLocaleDateString();
            parameters = Object.assign(parameters, ...parameters[key]);
          } else if (Array.isArray(parameters[key][k])) {
            const result = parameters[key][k].map(item => item.name);
            parameters[key] = result;
          } else if (typeof (parameters[key][k]) === 'boolean') {
            const status = Object.keys(parameters[key]).filter(item => parameters[key][item]);
            parameters[key] = status;
          }
        });
      }
    });
    return parameters;
  }
  
}
