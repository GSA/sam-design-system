import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Component, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyFieldMultiCheckboxComponent } from './multicheckbox';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new(...args: any[]): T }): ComponentFixture<T> {
    TestBed.overrideComponent(type, { set: { template: html } });
    const fixture = TestBed.createComponent(type);
    fixture.detectChanges();
    return fixture as ComponentFixture<T>;
}


let testComponentInputs;

describe('Formly Field multicheckbox Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, FormlyFieldMultiCheckboxComponent],
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                FormlySelectModule,
                FormlyModule.forRoot({
                    types: [
                        {
                            name: 'multicheckbox',
                            component: FormlyFieldMultiCheckboxComponent,
                        },
                    ],
                }),
            ],
        });
    });

    describe('options', () => {
        beforeEach(() => {
            testComponentInputs = {
                form: new FormGroup({}),
                options: {},
                model: {},
            };
        });

        it('should bind to a static array of data', () => {
            testComponentInputs.fields = [   {
                key: 'multi-checkbox',
                type: 'multicheckbox',
                templateOptions: {
                  label: 'Formly multi Select checkbox',
                  options: [
                    {
                      key: 'sports',
                      value: 'Sports'
                    },
                    {
                      key: 'movies',
                      value: 'Movies'
                    },
                    {
                      key: 'others',
                      value: 'Others'
                    }
                  ]
                },
              }];

            const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'),
                trigger = fixture.nativeElement.querySelector('usa-checkbox')
            const expectedValue = fixture.debugElement.query(By.css('.usa-checkbox')).componentInstance.field;
            fixture.detectChanges();
            expect(expectedValue.templateOptions.options.length).toBe(3)

        });

    });

});

@Component({ selector: 'formly-form-multicheckbox', template: '', entryComponents: [] })
class TestComponent {
    @ViewChild(FormlyForm) formlyForm: FormlyForm;

    fields = testComponentInputs.fields;
    form: FormGroup = testComponentInputs.form;
    model = testComponentInputs.model || {};
    options = testComponentInputs.options;
}