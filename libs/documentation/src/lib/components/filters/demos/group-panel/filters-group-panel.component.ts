import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyUtilsService } from '@gsa-sam/sam-formly';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './filters-group-panel.component.html',
  selector: `sds-filters-group-panel-demo`,
})
export class FiltersGroupPanel implements OnInit {
  constructor() { }

  results: any = {};
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);
  chips: any[];
  // Groups

  // Default Multiple Controls
  sdsGroupDefaultMultipleControls: FormlyFieldConfig[] = [
    {
      key: 'filters',
      className: 'grid-col-2 display-inline-block',
      templateOptions: {
        label: 'Status',
        group: 'popover',
      },
      fieldGroup: [
        {
          key: 'socioeconomic',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Socio-Economic Status',
            required: true,
            options: [
              {
                key: 'vet',
                value: 'Veteran Owned'
              },
              {
                key: 'women',
                value: 'Women Owned'
              },
              {
                key: 'minority',
                value: 'Minority Owned'
              }
            ]
          },
        },
      ],
    },
    {
      key: 'filters',
      className: 'grid-col-2 display-inline-block',
      templateOptions: {
        label: 'Type',
        group: 'popover',
      },
      fieldGroup: [
        {
          key: 'socioeconomic2',
          type: 'multicheckbox',
          templateOptions: {
            label: 'Socio-Economic Status',
            required: true,
            options: [
              {
                key: 'vet',
                value: 'Veteran Owned'
              },
              {
                key: 'women',
                value: 'Women Owned'
              },
              {
                key: 'minority',
                value: 'Minority Owned'
              }
            ]
          },
        },
      ],
    },
  ];

  // Default Single Control
  sdsGroupDefaultSingleControl: FormlyFieldConfig[] = [
    {
      key: 'single.default.entity.title',
      type: 'input',
      templateOptions: {
        label: 'Entity Name',
        group: 'panel',
        placeholder: 'eg: Acme Corporation',
        description: 'Enter the name of your entity.',
        required: true,
      },
    },
  ];

  public ngOnInit() {
    this.filterChange$.subscribe((res) => {
      this.results = res;
    });
  }

  onFilterChange($event: any) {
    const readonlyData = FormlyUtilsService.formlyConfigToReadonlyData(this.sdsGroupDefaultMultipleControls, $event);
    this.chips = readonlyData.filter(data => data.value);
  }
}
