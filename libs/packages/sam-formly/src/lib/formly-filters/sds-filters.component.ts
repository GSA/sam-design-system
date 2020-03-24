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
import { Router, ActivatedRoute, UrlSerializer, UrlTree, DefaultUrlSerializer } from '@angular/router';

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

  private queryParams = '';

  constructor(@Optional() private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,
    private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.form.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        // this.queryParams = this.getKeyValueFilters(next);

        this.queryParams = this.convertToParam(next)
        window.location.href = `${this.queryParams}`;
       ;
        this.filterChange.emit(next);
        if (this.formlyUpdateComunicationService) {
          this.formlyUpdateComunicationService.updateFilter(next);
        }
      });
  }

  convertToParam(filters) {
    const result = [];
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        for (const subKey in filters[key]) {
          if (filters[key].hasOwnProperty(subKey)) {
            if (filters[key][subKey] === "") {
              filters[key][subKey] = null;
            }
            if (filters[key][subKey]) {
              const value = `${key}[${subKey}]=${JSON.stringify(filters[key][subKey])}`;
              result.push(value);
              // result[key + "[" + subKey + "]"] = filters[key][subKey];
            }
          }
        }
      }
    }
    console.log(result.join('&'), 'url')
    return '?'+result.join('&');
  }

  //   var queryStringToJSON = function (url) {
  //     if (url === '')
  //        return '';
  //     var pairs = (url || location.search).slice(1).split('&');
  //     var result = {};
  //     for (var idx in pairs) {
  //     var pair = pairs[idx].split('=');
  //     if (!!pair[0])
  //         result[pair[0].toLowerCase()] = decodeURIComponent(pair[1] || '');
  //     }
  //    return result;
  // }
}


export class CustomUrlSerializer implements UrlSerializer {
  parse(url: any): UrlTree {
      let dus = new DefaultUrlSerializer();
      return dus.parse(url);
  }

  serialize(tree: UrlTree): any {
      let dus = new DefaultUrlSerializer(),
          path = dus.serialize(tree);
      // use your regex to replace as per your requirement.
      return path.replace(/%2/g,',');
  }
}