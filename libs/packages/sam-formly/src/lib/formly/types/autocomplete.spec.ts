import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { FormlyFieldAutoCompleteComponent } from './autocomplete';
import { of as observableOf } from 'rxjs';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode, SdsAutocompleteModule } from '@gsa-sam/components';
import { AutocompleteSampleDataService } from '../services/autocomplete-sample.service';

const createTestComponent = (html: string) =>
  createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new(...args: any[]): T }): ComponentFixture<T> {
  TestBed.overrideComponent(type, { set: { template: html } });
  const fixture = TestBed.createComponent(type);
  fixture.detectChanges();
  return fixture as ComponentFixture<T>;
}

let testAutocompleteComponent;

describe('Formly Field Select Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, FormlyFieldAutoCompleteComponent],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        SdsAutocompleteModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'autocomplete',
              component: FormlyFieldAutoCompleteComponent,
            },
          ],
        }),
      ],
    });
  });

  describe('auto complete', () => {
    beforeEach(() => {
      testAutocompleteComponent = {
        form: new FormGroup({}),
        model: {
          "firstName": {
            "items": [
              {
                "id": "1",
                "parentId": null,
                "name": "Level 1",
                "subtext": "id 1",
                "type": "Level 1",
                "childCount": 2,
                "highlighted": true
              }
            ]
          }
        },
        settings: new SDSAutocompletelConfiguration(),
        autocompleteModel: new SDSSelectedItemModel(),
        service: new AutocompleteSampleDataService()

      };
      testAutocompleteComponent.settings.id = 'autocomplete1';
      testAutocompleteComponent.settings.primaryKeyField = 'id';
      testAutocompleteComponent.settings.primaryTextField = 'name';
      testAutocompleteComponent.settings.secondaryTextField = 'subtext';
      testAutocompleteComponent.settings.labelText = 'Autocomplete 1';
      testAutocompleteComponent.settings.selectionMode = SelectionMode.MULTIPLE;
      testAutocompleteComponent.settings.autocompletePlaceHolderText = 'Enter text';
      testAutocompleteComponent.settings.debounceTime = 0;

    });

    xit('should correctly bind to a static array of data', () => {
      testAutocompleteComponent.fields = [{
        key: 'firstName',
        type: 'autocomplete',
        templateOptions: {
          label: 'Auto Complete Test',
          service: testAutocompleteComponent.service,
          configuration: testAutocompleteComponent.settings,
          model: testAutocompleteComponent.autocompleteModel,
          modelChange: testAutocompleteComponent.changes
        }
      }];
      const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>');
      fixture.detectChanges();
      expect(fixture).toBeTruthy();
    });

  });

});

@Component({ selector: 'formly-form-test', template: '', entryComponents: [] })
class TestComponent {
  @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

  fields = testAutocompleteComponent.fields;
  form: FormGroup = testAutocompleteComponent.form;
  model = testAutocompleteComponent.model || {};
}