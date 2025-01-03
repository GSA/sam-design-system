import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './filters-optional.component.html',
  selector: `sds-filters-optional-demo`,
})
export class FiltersOptional implements OnInit {
  constructor() {}

  results: any = {};
  form = new UntypedFormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  public filterChange$ = new BehaviorSubject<object>(null);

  // Groups

  // Accordion Multiple Controls
  sdsGroupAccordionMultipleControls: FormlyFieldConfig[] = [
    {
      key: 'filters',
      props: {
        label: 'Entity Information',
        group: 'accordion',
      },
      fieldGroup: [
        {
          key: 'keyword',
          type: 'input',
          props: {
            type: 'text',
            label: 'Unique Entity ID',
            tagText: 'DUNS',
            tagClass: 'sds-tag--info-purple',
            placeholder: 'A123456',
          },
        },
        {
          key: 'multiple.accordion.entity.title',
          type: 'input',
          props: {
            label: 'Entity Name',
            placeholder: 'eg: Acme Corporation',
            description: 'Enter the name of your entity.',
            required: true,
          },
        },
      ],
    },
  ];

  // Accordion Single Control
  sdsGroupAccordionSingleControl: FormlyFieldConfig[] = [
    {
      key: 'single.accordion.entity.title',
      type: 'input',
      props: {
        label: 'Entity Name',
        group: 'accordion',
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
}
