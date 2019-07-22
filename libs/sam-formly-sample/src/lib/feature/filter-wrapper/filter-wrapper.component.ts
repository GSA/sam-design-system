import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'filter-wrapper',
  templateUrl: './filter-wrapper.component.html',
})
export class FilterWrapperComponent implements OnInit {

  results: any = {};
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
    /**
   * Event when something is checked/selected in the grid
   */
  public filterChange$ = new BehaviorSubject<object>(null);


  fields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Keyword' },
      fieldGroup: [{
        key: 'keyword',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Keyword',
          hideLabel: true
        },

      }]
    },

    {
      key: 'searchEntity',
      wrappers: ['accordianwrapper'],
      templateOptions: { label: 'Entity' },
      fieldGroup: [
        {
          key: 'legalBusinessName',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: '',
            inputType: 'text',
          },
        },
        {
          key: 'uniqueEntityIdSam',
          type: 'input',
          templateOptions: {
            required: true,
            label: 'Unique Entity ID (SAM)',
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
          },
        }
      ],
    },
    {
      key: 'entityStatus',
      wrappers: ['accordianwrapper'],
      templateOptions: { label: 'Entity Status' },
      fieldGroup: [
        {
          key: 'statusCheckbox',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Status Select',
            options: [
              {
                key: 'Active',
                value: 'Active'
              },
              {
                key: 'Draft',
                value: 'Draft'
              },
              {
                key: 'Expired',
                value: 'Expired'
              },
              {
                key: 'InProgress',
                value: 'In Progress'
              }
            ]
          },
        },
        {
          key: 'entityName',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: '',
            inputType: 'text',
          },
        },
      ]
    },
    {
      key: 'expirationDate',
      wrappers: ['accordianwrapper'],
      templateOptions: { label: 'Expiration Date' },
      fieldGroup: [
        {
          key: 'expirationDateOption',
          type: 'radio',
          templateOptions: {
            label:'Expiration Date',
            options: [
              { label: '30 Days', value: '30' },
              { label: '60 Days', value: '60' },
              { label: '90 Days', value: '90' },

            ]
          },

          
        },
        {
          key: 'entityCheckbox',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Entity Status',
            options: [
              {
                key: 'Active',
                value: 'Active'
              },
              {
                key: 'Draft',
                value: 'Draft'
              },
              {
                key: 'Expired',
                value: 'Expired'
              },
              {
                key: 'InProgress',
                value: 'In Progress'
              }
            ]
          },
        },
      ]
    },
    // {
    //   key: 'addressUpdate',
    //   wrappers: ['accordianwrapper'],
    //   templateOptions: { label: 'Address Update' },
    //   fieldGroup: [
    //     {
    //       key: 'addressUpdateOption',
    //       type: 'radio',
    //       templateOptions: {
    //         options: [
    //           { label: 'Update Required', value: 'adrupr' },
    //           { label: 'Update Not Required', value: 'adrupn' },

    //         ]
    //       },
    //     }
    //   ]
    // },
    {
      key: 'entityType',
      wrappers: ['filterwrapper'],
      templateOptions: { label: 'Entity Types' },
      fieldGroup: [
        {
          key: 'entityType',
          type: 'select',
          templateOptions: {
            label: 'Type',
            multiple: false,
            options: [
              { label: 'Contract Opportunities', value: 'co' },
              { label: 'Entity Information', value: 'ei' },
              { label: 'Assitance Listings', value: 'al' },
              { label: 'Contract Data', value: 'cd' },
              { label: 'Federal Heirarchy', value: 'fh' },
              { label: 'Wage Determination', value: 'wd' },
            ],
          },
        },
        {
          key: 'entityCheckbox',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Entity Status',
            options: [
              {
                key: 'Active',
                value: 'Active'
              },
              {
                key: 'Draft',
                value: 'Draft'
              },
              {
                key: 'Expired',
                value: 'Expired'
              },
              {
                key: 'InProgress',
                value: 'In Progress'
              }
            ]
          },
        },
      ]
    }
  ];
  public ngOnInit() {
    this.filterChange$.subscribe(
      res =>
        this.results = res
  );
  }






  // results: any;
  // form = new FormGroup({});
  // model = {};
  // options: FormlyFormOptions = {};

  // fields: FormlyFieldConfig[] = [
 
  //   {
  //     key: 'filters',
  //     wrappers: ['filterwrapper'],
  //     templateOptions: { label: 'Keyword' },
  //     fieldGroup:[{
  //        key: 'firstName',
  //         type: 'input',
  //         templateOptions: {
  //           required: true,
  //           type: 'text',
           
  //         },
        
  //     }]
  //   },

  //   {
  //     key: 'testings',
  //     wrappers: ['accordianwrapper'],
  //     templateOptions: { label: 'Service Classifications' },
  //     fieldGroup: [ 
  //       {
  //       key: 'text',
  //       type: 'input',
  //       templateOptions: {
  //         label: 'Formly input type text',
  //         placeholder: 'placeholder',
  //         inputType: 'text',
  
  //         required: true,
  //         inputStyle: 'success'
  //       },
  //     },
  //     {
  //       key: 'number',
  //       type: 'input',
  //       templateOptions: {
  //         required: true,
  //         label: 'Formly input type number',
  //         placeholder: 'placeholder',
  //         min: 13,
  //         max: 40,
  //         inputType: 'number',
  //         inputStyle: 'error',
  //         errorMessage: 'Helpful error message'
  //       },
  //     },
  //     {
  //       key: 'drop-down',
  //       type: 'select',
  //       templateOptions: {
  //         label: 'Formly select type',
  //         placeholder: 'Select',
  //         multiple: false,  // can be true or false to select multiple options or single
  //         options: [
  //           { label: 'Shilpa', value: 'ys', group: 'Female' },
  //           { label: 'Christy', value: 'ch', group: 'Female' },
  //           { label: 'Carlos', value: 'cv', group: 'Male' },
  //           { label: 'Rinu', value: 'rn', group: 'Male' },
  //           { label: 'Thomas', value: 'tt', group: 'Male' },
  //           { label: 'Sam', value: 'sam', group: 'Female' },
  //           { label: 'David', value: 'dr', group: 'Male' },
  //         ],
  //       },
  //     },
  //     {
  //       key: 'text',
  //       type: 'textarea',
  //       templateOptions: {
  //         label: 'Formly input type textarea',
  //         placeholder: 'placeholder',
  //         required: true,
  //       },
  //     },
  //     {
  //       key: 'radio',
  //       type: 'radio',
  //       templateOptions: {
  //         label: 'Formly Radio button type',
  //         options: [
  //           { label: 'Option A', value: 'a' },
  //           { label: 'Option B', value: 'b' },
  //           { label: 'Option C', value: 'c' },
  //           { label: 'Option C', value: 'd' },
  //         ],
  //       },
  //     },
  //     {
  //       key: 'checkbox',
  //       type: 'checkbox',
  //       templateOptions: {
  //         label: 'Formly Checkbox',
  //         option: { label: 'Option A', value: 'a' },
  //       },
  //     },
  //     {
  //       key: 'multi-checkbox',
  //       type: 'multicheckbox',
  //       templateOptions: {
  //         label: 'Formly multi Select checkbox',
  //         options: [
  //           {
  //             key: 'sports',
  //             value: 'Sports'
  //           },
  //           {
  //             key: 'movies',
  //             value: 'Movies'
  //           },
  //           {
  //             key: 'others',
  //             value: 'Others'
  //           }
  //         ]
  //       },
  //     }
  //       ],
  //   },
  // ];

  // // To display the selected model values
  // submit(model) {
  //   this.results = model;
  // }


}
