import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyFieldInputComponent } from './input';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new(...args: any[]): T }): ComponentFixture<T> {
    TestBed.overrideComponent(type, { set: { template: html } });
    const fixture = TestBed.createComponent(type);
    fixture.detectChanges();
    return fixture as ComponentFixture<T>;
}


let testComponentInputs;

describe('Formly Field input Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, FormlyFieldInputComponent],
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                FormlySelectModule,
                FormlyModule.forRoot({
                    types: [
                        {
                            name: 'input',
                            component: FormlyFieldInputComponent,
                        },
                    ],
                }),
            ],
        });
    });

    describe('input', () => {
        beforeEach(() => {
            testComponentInputs = {
                form: new FormGroup({}),
                options: {},
                model: {},
            };
        });

        it('should correctly bind to a static array of data', () => {
            testComponentInputs.fields = [{

                key: 'input-test',
                type: 'input',
                templateOptions: {
                    label: 'Formly Input',
                    required: true
                }

            }];
            const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'),
                trigger = fixture.nativeElement.querySelector('usa-input')
            const expectedValue = fixture.debugElement.query(By.css('.usa-input')).componentInstance.field.templateOptions;
            fixture.detectChanges();
            const inputField = fixture.debugElement.query(By.css('.usa-input'));
            expect(inputField.nativeElement.type).toBe('text');
            expect(inputField.componentInstance.field.templateOptions.required).toBe(true);
        });

        it('input type should be text', () => {
            testComponentInputs.fields = [{

                key: 'input-test',
                type: 'input',
                templateOptions: {
                    label: 'Formly Input',
                    required: true,
                    inputType: 'text',
                }

            }];

            const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'),
                trigger = fixture.nativeElement.querySelector('usa-input')
            const expectedValue = fixture.debugElement.query(By.css('.usa-input')).componentInstance.field.templateOptions;
            fixture.detectChanges();
            const inputField = fixture.debugElement.query(By.css('.usa-input'));
            expect(inputField.nativeElement.type).toBe('text');
        });

        it('input type should be number', () => {
            testComponentInputs.fields = [{

                key: 'input-test',
                type: 'input',
                templateOptions: {
                    label: 'Formly Input',
                    required: true,
                    inputType: 'number',
                }

            }];

            const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>'),
                trigger = fixture.nativeElement.querySelector('usa-input')
            const expectedValue = fixture.debugElement.query(By.css('.usa-input')).componentInstance.field.templateOptions;
            fixture.detectChanges();
            const inputField = fixture.debugElement.query(By.css('.usa-input'));
            expect(inputField.nativeElement.type).toBe('number');
        });


    });

});

@Component({ selector: 'formly-form-input', template: '', entryComponents: [] })
class TestComponent {
    @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

    fields = testComponentInputs.fields;
    form: FormGroup = testComponentInputs.form;
    model = testComponentInputs.model || {};
    options = testComponentInputs.options;
}