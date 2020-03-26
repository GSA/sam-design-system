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
import * as qs from 'qs';
import { Location } from '@angular/common';
@Component({
  selector: 'sds-filters',
  template: `
      <formly-form [form]="form" (modelChange)="modelChange.next($event)" [fields]="fields" [model]="model"></formly-form>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
   *  Emit results when model updated
   */
  @Output() filterChange = new EventEmitter<object[]>();


  /**
   * debounce time for current page input
   */
  @Input() debounceTime = 0;
  private queryParams = {};
  label = [];

  constructor(@Optional() private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    // this.route.queryParams.subscribe(params => {
    //   console.log(params);
    //   for (const key in params) {
    //     if (key) {
    //     const arr = key.replace(']', '').split('[');
    //     //console.log(arr, 'array');
    //     this.model[arr[0]] = { [arr[1]]: JSON.parse(params[key]) };
    //     } 
    //   }
    //   setTimeout(() => {
    //     this.form.patchValue({
    //       ...this.model
    //     })
    //   });
    // });
    this.form.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        const params = this.convertToParam(next);
        if(params) {
        this.location.replaceState(`${this.router.url}?${params}`);
        }
        // this.router.navigateByUrl(`${this.router.url}${params}`)
        this.filterChange.emit(next);
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(next);
        }
      });
  }
  convertToParam(filters) {
    const encodedValues = qs.stringify(
      filters,
      { skipNulls: true }
    );
    console.log(encodedValues, 'url');
    return encodedValues;
  }
}
