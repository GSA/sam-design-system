import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm, FormlyFieldConfig } from '@ngx-formly/core';
import { SdsTabsModule, SelectionMode } from 'libs/packages/components/src/lib/public-api';
import { SdsFormlyTypes } from '../models/formly-types';
import { SdsFormlyModule } from '../formly.module';
import { FormlyTabsWrapperComponent } from './tabs.wrapper';

let testComponentInputs;

@Component({ selector: 'formly-form-input', template: '', entryComponents: [] })
class TestComponent {
  @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

  fields = testComponentInputs.fields;
  form: FormGroup = testComponentInputs.form;
  model = testComponentInputs.model || {};
  options = testComponentInputs.options;
}

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new (...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

const getTabsFieldConfig = (): FormlyFieldConfig[] => {
  return [
    {
      key: 'keyword',
      wrappers: ['tabs'],
      templateOptions: {
        label: 'Keyword Search',
        description: `For more information on how to use our keyword search, visit our <a href="#"> help guide </a>`,
        hideOptional: true,
        tabClass: 'sds-tabs--default',
      },
      fieldArray: {
        fieldGroup: [
          // tab 1
          {
            templateOptions: {
              tabHeader: 'Simple Search',
            },
            fieldGroup: [
              {
                key: 'keywordRadio',
                type: 'radio',
                defaultValue: 'anyWords',
                id: 'keywordRadioTest',
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
};

/**
 * UNIT TESTS START HERE
 */
describe('Tabs Formly Field Component', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyTabsWrapperComponent],
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, SdsTabsModule, SdsFormlyModule, FormlyModule],
    });

    testComponentInputs = {
      form: new FormGroup({}),
      options: {},
      model: {},
      fields: getTabsFieldConfig(),
    };

    fixture = createTestComponent(
      '<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'
    );
  });

  it(
    'should properly trigger filter change on model update',
    waitForAsync(() => {
      const subscription = fixture.componentInstance.formlyForm.modelChange.subscribe((change) => {
        expect(change.keyword.keywordRadio === 'allWords');
        subscription.unsubscribe();
      });
      const secondRadioOption: HTMLFormElement = fixture.debugElement.query(By.css('#keywordRadioTest_1'))
        .nativeElement;
      secondRadioOption.click();
      fixture.detectChanges();
    })
  );

  it('Should switch tabs on tab click', () => {
    const tabsElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.sds-tabs__item'));
    expect(tabsElements.length).toEqual(2);
    expect(tabsElements[0].attributes['aria-selected']).toEqual('true');
    const secondTabButton: HTMLButtonElement = tabsElements[1].nativeElement;
    secondTabButton.click();
    fixture.detectChanges();
    expect(tabsElements[0].attributes['aria-selected']).toEqual('false');
    expect(tabsElements[1].attributes['aria-selected']).toEqual('true');
  });
});
