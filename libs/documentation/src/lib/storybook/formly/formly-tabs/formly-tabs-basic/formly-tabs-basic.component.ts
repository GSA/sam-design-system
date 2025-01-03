import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectionMode } from '@gsa-sam/components';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-formly-tabs-basic',
  templateUrl: './formly-tabs-basic.component.html',
})
export class FormlyTabsBasicComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      wrappers: ['tabs'],
      props: {
        label: 'Keyword Search',
        description: `For more information on how to use our keyword search, visit our <a href="#"> help guide </a>`,
        hideOptional: true,
        tabClass: 'sds-tabs--formly',
      },
      fieldArray: {
        fieldGroup: [
          // tab 1
          {
            props: {
              tabHeader: 'Simple Search',
            },
            id: 'Tab1',
            fieldGroup: [
              {
                key: 'keywordRadio',
                type: 'radio',
                defaultValue: 'anyWords',
                props: {
                  options: [
                    {
                      label: 'Any Words',
                      value: 'anyWords',
                    },
                    {
                      label: 'All Words',
                      value: 'allWords',
                    },
                    {
                      label: 'Exact Match',
                      value: 'exactMatch',
                    },
                  ],
                },
              },
              {
                key: 'keywordTags',
                type: 'autocomplete',
                props: {
                  expand: false,
                  configuration: {
                    id: 'keyword',
                    primaryKeyField: 'key',
                    primaryTextField: 'text',
                    labelText: 'Search Keyword',
                    selectionMode: SelectionMode.MULTIPLE,
                    autocompletePlaceHolderText: '',
                    isTagModeEnabled: true,
                  },
                },
              },
            ],
          },
          //tab 2
          {
            id: 'Tab2',
            props: {
              tabHeader: 'Search Editor',
              submitButtonId: 'booleanSearchSubmit',
            },
            fieldGroup: [
              {
                key: 'keywordTextarea',
                type: SdsFormlyTypes.TEXTAREA,
                className: 'display-block padding-left-2 padding-right-2',
                props: {
                  placeholder: 'e.g. ((rental AND property) OR (lease and property) AND NOT ( "short term"))',
                  required: true,
                },
              },
              {
                type: SdsFormlyTypes.BUTTON,
                id: 'booleanSearchSubmit',
                className: 'display-block margin-top-1 padding-left-2 padding-right-2',
                props: {
                  text: 'Search',
                  type: 'submit',
                },
              },
            ],
          },
        ],
      },
    },
  ];
}
