import {
  Component, Input, Output,
  ChangeDetectionStrategy, ChangeDetectorRef,
  EventEmitter, Optional, OnInit
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Subject } from 'rxjs';
import { SDSFormlyUpdateComunicationService } from './service/sds-filters-comunication.service';
import { pairwise } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import * as qs from 'qs';
import { Location } from '@angular/common';
import 'rxjs/add/operator/pairwise';
@Component({
  selector: 'sds-filters',
  template: `
      <formly-form [form]="form" (modelChange)="modelChange.next($event)" [fields]="fields" [model]="model"></formly-form>

      {{convertedmodel |json}}
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
  convertedmodel: any ={};
  constructor(@Optional() private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,private cdr: ChangeDetectorRef,
    private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe(params => {
    //   const query = params.get("query");
    //   this.model = this.convertToModel(query);
    //   setTimeout(() => {
    //     this.form.patchValue({
    //       ...this.model
    //     })
    //   })
    // });

    this.route.queryParams.subscribe(params => {
      // tslint:disable-next-line:forin
     console.log( qs.stringify(params),'str');
    console.log(qs.parse(qs.stringify(params)), 'model')
    this.model = qs.parse(qs.stringify(params));
    
      setTimeout(() => {
        this.form.patchValue({
          ...this.model
        })
      });
    });
  
    this.form.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        const params = this.convertToParam(next);
       // this.queryParams = this.convertToParam(next);
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams:  params,
          queryParamsHandling: 'merge',
        });
        this.filterChange.emit(next);
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(next);
        }
      });
  }
  convertToParam(filters) {
   
    const encodedValues = qs.stringify(
      filters,
      { skipNulls: true ,  encode: false}
    );

    const target = {};
    encodedValues.split('&').forEach((pair) => {
  if(pair !== '') {
    const splitpair = pair.split('=');
    const key = splitpair[0].charAt(0).toLowerCase() + splitpair[0].slice(1).split(' ').join('');
    target[key] = splitpair[1];
  }
});

   // const parse =qs.parse(encodedValues);
    return target;
  }
  convertToModel(str){
    let obj = {};
    obj= qs.parse(str);
    return obj;
  }
}
