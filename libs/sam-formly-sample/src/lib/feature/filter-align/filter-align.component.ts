import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'sds-filter-align',
  templateUrl: './filter-align.component.html',

})
export class FilterAlignComponent implements OnInit {

  constructor() {

  }
  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  /**
 * Event when something is checked/selected in the grid
 */
  public filterChange$ = new BehaviorSubject<object>(null);


  fields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      wrappers: ['customwrapper'],
      type: 'input',
      templateOptions: {
        label: 'Keyword (with label)',
       
      },
    },

    // {
    //   key: 'entityStatus',
    //   wrappers: [ 'customwrapper'],
    //   type: 'multicheckbox',
    //   templateOptions: {
    //     label: 'Entity Status',
    //     options: [
    //       {
    //         key: 'Active',
    //         value: 'Active'
    //       },
    //       {
    //         key: 'Draft',
    //         value: 'Draft'
    //       },
    //       {
    //         key: 'Expired',
    //         value: 'Expired'
    //       },
    //       {
    //         key: 'InProgress',
    //         value: 'In Progress'
    //       }
    //     ]
    //   }
    // },
  ];
  public ngOnInit() {
    this.filterChange$.subscribe(
      res => {
        this.results = res;
        //  this.change.detectChanges();
      }
    );
  }

}
