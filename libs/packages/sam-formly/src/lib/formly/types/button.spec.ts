
import { FormlyModule, FormlyForm } from '@ngx-formly/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldButtonComponent } from './button';
import { Component, ViewChild } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

export function createGenericTestComponent<T>(html: string, type: { new(...args: any[]): T }): ComponentFixture<T> {
    TestBed.overrideComponent(type, { set: { template: html } });
    const fixture = TestBed.createComponent(type);
    fixture.detectChanges();
    return fixture as ComponentFixture<T>;
}

let testComponentButtons;

describe('Formly Field button Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, FormlyFieldButtonComponent],
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                FormlySelectModule,
                FormlyModule.forRoot({
                    types: [
                        {
                            name: 'button',
                            component: FormlyFieldButtonComponent,
                        },
                    ],
                }),
            ],
        });
    });

    describe('button', () => {
        beforeEach(() => {
            testComponentButtons = {
                form: new FormGroup({}),
                options: {},
                model: {},
            };
        });
        it('should test click', () => {
            testComponentButtons.fields = [
                {
                    key: 'button-test',
                    type: 'button',
                    templateOptions: {
                        text: 'Show Extension',
                        btnType: 'info',
                        onClick: $event => {
                            testComponentButtons.model.showExtension = 'show';
                        }
                    }
                }
            ];
            const fixture = createTestComponent(
                '<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>'),
                trigger = fixture.nativeElement.querySelector('ng-star-inserted')
            const buttonField: any = fixture.debugElement.query(By.css('.usa-button--unstyled'));

            const spy = spyOn(buttonField.nativeElement, 'click');
            buttonField.nativeElement.click();
            fixture.detectChanges();
            expect(spy).toHaveBeenCalled();
        });


        it('should test click worked', () => {
            testComponentButtons.fields = [
                {
                    key: 'button-test',
                    type: 'button',
                    templateOptions: {
                        text: 'Show Extension',
                        btnType: 'info',
                        onClick: $event => {
                            testComponentButtons.model.showExtension = 'show';
                        }
                    }
                }
            ];
            const fixture = createTestComponent(
                '<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>'),
                trigger = fixture.nativeElement.querySelector('ng-star-inserted')
            const buttonField: any = fixture.debugElement.query(By.css('.usa-button--unstyled'));

            const spy = spyOn(buttonField.nativeElement, 'click');
            buttonField.nativeElement.click();
            buttonField.nativeElement.dispatchEvent(new Event('onClick'));
        });

    });

});

@Component({ selector: 'formly-form-button', template: '', entryComponents: [] })
class TestComponent {
    @ViewChild(FormlyForm, { static: false }) formlyForm: FormlyForm;

    fields = testComponentButtons.fields;
    form: FormGroup = testComponentButtons.form;
    model = testComponentButtons.model || {};
    options = testComponentButtons.options;
}
