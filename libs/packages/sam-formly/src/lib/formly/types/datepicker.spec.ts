import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Component, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyForm } from '@ngx-formly/core';

import { FormlyFieldDatePickerComponent } from './datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { of as observableOf } from 'rxjs';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new(...args: any[]): T }): ComponentFixture<T> {
    TestBed.overrideComponent(type, { set: { template: html } });
    const fixture = TestBed.createComponent(type);
    fixture.detectChanges();
    return fixture as ComponentFixture<T>;
}


let testComponentInputs;

describe('Formly Field Datepicker Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, FormlyFieldDatePickerComponent],
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                MatNativeDateModule,
                MatDatepickerModule,
                MatInputModule,
                FormlyModule.forRoot({
                    types: [
                        {
                            name: 'datepicker',
                            component: FormlyFieldDatePickerComponent,
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

        it('should open date picker and select value', () => {
            testComponentInputs.fields = [{
                key: 'entityDate',
                type: 'datepicker',
                templateOptions: {
                    label: 'Expiration Date',
                    startDate: new Date(2019, 11, 25),
                    minDate: new Date(2019, 8, 15),
                    maxDate: new Date(2020, 0, 1)
                }
            }];

            const fixture = createTestComponent('<formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>');
            //Checks created
            expect(fixture).toBeTruthy();

            //Clicks open date modal
            let dateOpen = fixture.nativeElement.querySelector('.mat-icon-button');
            dateOpen.click();
            fixture.detectChanges();

            //Selects start date 
            let dateButton = <HTMLButtonElement>document.querySelector('.mat-calendar-body-active');
            dateButton.click();
            fixture.detectChanges();
            //Check the start the date is the selected date
            expect(testComponentInputs.model.entityDate).toEqual(new Date(2019, 11, 25));
        });

    });

});

@Component({ selector: 'formly-form-test', template: '', entryComponents: [] })
class TestComponent {
    @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

    fields = testComponentInputs.fields;
    form: FormGroup = testComponentInputs.form;
    model = testComponentInputs.model || {};
    options = testComponentInputs.options;
}