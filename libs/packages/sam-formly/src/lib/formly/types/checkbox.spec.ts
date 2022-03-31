import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyFieldCheckboxComponent } from './checkbox';
import { of as observableOf } from 'rxjs';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new(...args: any[]): T }): ComponentFixture<T> {
    TestBed.overrideComponent(type, { set: { template: html } });
    const fixture = TestBed.createComponent(type);
    fixture.detectChanges();
    return fixture as ComponentFixture<T>;
}


let testComponent, customTemplate;

describe('Formly Field checkbox Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, FormlyFieldCheckboxComponent],
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                FormlySelectModule,
                FormlyModule.forRoot({
                    types: [
                        {
                            name: 'checkbox',
                            component: FormlyFieldCheckboxComponent,
                        },
                    ],
                }),
            ],
        });
    });

    describe('options', () => {
        beforeEach(() => {
            testComponent = {
                form: new FormGroup({}),
                options: {},
                model: {},
            };
        });

        it('should correctly bind to a static array of data', () => {
            testComponent.fields = [{

                key: 'textcheckbox',
                type: 'checkbox',
                templateOptions: {
                    label: 'Formly Checkbox',
                    option: { label: 'Option A', value: 'a' },
                }

            }];

            const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'),
                trigger = fixture.nativeElement.querySelector('usa-checkbox')
            const expectedValue = fixture.debugElement.query(By.css('.usa-checkbox')).componentInstance.field.templateOptions.option.value;

            fixture.detectChanges();
            expect(expectedValue).toBe('a')

        });

    });

    describe('custom template', () => {
      beforeEach(() => {
        testComponent = {
            form: new FormGroup({}),
            options: {},
            model: {},
        };
    });
      fit('should display the template if provided', () => {
        testComponent.fields = [{

          key: 'textcheckbox',
          type: 'checkbox',
          templateOptions: {
              label: 'Formly Checkbox',
              option: { label: 'Option A', value: 'a' }
          }

      }];

      const fixture = createTestComponent(`
        <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>
        <ng-template #custom><i>custom text</i></ng-template>
      `)
      const component = fixture.componentInstance;
      // testComponent.fields[0].templateOptions.tempalte = component.customTemplate;

      fixture.detectChanges();
      const customContent = fixture.debugElement.nativeElement
      console.log('html', customContent)
      // console.log('form', component.formlyForm.model)
      expect(component.customTemplate).toBeTruthy();
      // expect(customContent).toBeTruthy();
      })
    })

});

@Component({ selector: 'formly-form-test', template: '', entryComponents: [] })
class TestComponent implements AfterViewInit{
    @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;
    @ViewChild('custom') customTemplate: TemplateRef<any>;

    fields = testComponent.fields;
    form: FormGroup = testComponent.form;
    model = testComponent.model || {};
    options = testComponent.options;

    ngAfterViewInit(){
      this.fields[0].templateOptions.template = this.customTemplate;
    }
}
