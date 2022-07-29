import { Component } from '@angular/core';
import { SelectionMode, TabPanelComponent } from '@gsa-sam/components';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-formly-tabs-intercept',
  templateUrl: './formly-tabs-intercept.component.html',
})
export class FormlyTabsInterceptComponent {
  selectedTab: TabPanelComponent = null;
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      wrappers: ['tabs'],
      templateOptions: {
        label: 'Keyword Search',
        description: `For more information on how to use our keyword search, visit our <a href="#"> help guide </a>`,
        hideOptional: true,
        tabClass: 'sds-tabs--formly',
        interceptTabChange: true,
        selectedTab: this.selectedTab,
        preTabChange: this.preTabChange,
      },
      fieldArray: {
        fieldGroup: [
          // tab 1
          {
            templateOptions: {
              tabHeader: 'Simple Search',
            },
            id: 'Tab1',
            fieldGroup: [
              {
                key: 'keywordRadio',
                type: 'radio',
                defaultValue: 'anyWords',
                templateOptions: {
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
                templateOptions: {
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
            templateOptions: {
              tabHeader: 'Search Editor',
              submitButtonId: 'booleanSearchSubmit',
            },
            fieldGroup: [
              {
                key: 'keywordTextarea',
                type: SdsFormlyTypes.TEXTAREA,
                className: 'display-block padding-left-2 padding-right-2',
                templateOptions: {
                  placeholder: 'e.g. ((rental AND property) OR (lease and property) AND NOT ( "short term"))',
                  required: true,
                },
              },
              {
                type: SdsFormlyTypes.BUTTON,
                id: 'booleanSearchSubmit',
                className: 'display-block margin-top-1 padding-left-2 padding-right-2',
                templateOptions: {
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
  preTabChange(destinationTab: TabPanelComponent) {
    console.log('pretab change', destinationTab);
    const tabToGoTo: TabPanelComponent = destinationTab;
    const response = confirm('Proceed?');
    if (response == true) {
      this.selectedTab = tabToGoTo;
    }
  }
}
