
import {
    TestBed,
    ComponentFixture,
    fakeAsync,
    inject,
    flush,
} from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SdsFiltersModule } from './sds-filters.module';
import { SdsFormlyModule } from '../formly/formly.module';
import {
    SdsFiltersComponent
} from './sds-filters.component';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement,
        ViewContainerRef,
        Component, 
        Directive,
        TemplateRef,
        ViewChild,
        ChangeDetectionStrategy,
        NgModule,
 } from '@angular/core';
import {
    SdsDialogService,
    SdsDialogRef,
    SdsDialogModule
  } from '@gsa-sam/components';
  import {OverlayContainer, ScrollStrategy, Overlay} from '@angular/cdk/overlay';
import { tick } from '@angular/core/src/render3';

describe('The Sam Filters Component', () => {

    describe('rendered tests', () => {
        let component: SdsFiltersComponent;
        let fixture: ComponentFixture<SdsFiltersComponent>;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    SdsFormlyModule,
                    SdsFiltersModule
                ],

            });

            fixture = TestBed.createComponent(SdsFiltersComponent);
            component = fixture.componentInstance;
            component.fields = [
                {
                    key: 'filters',
                    wrappers: ['accordionwrapper'],
                    templateOptions: { label: 'Entity Name/UEI' },
                    fieldGroup: [{
                        key: 'uniqueId',
                        type: 'input',
                        templateOptions: {
                            required: true,
                            label: 'Formly input type number',
                            placeholder: 'placeholder',
                            min: 13,
                            max: 400,
                            minLength: 2,
                            maxLength: 4,
                            inputType: 'number',
                            inputStyle: 'error',
                            errorMessage: 'Helpful error message'
                        },
                        validation: {
                            show: true,
                        },

                    }]
                },
            ];
            component.form = new FormGroup({});
        });

        it('input type should be text', () => {
            fixture.detectChanges();
            const inputField = fixture.debugElement.query(By.css('.usa-input'));
            expect(inputField.nativeElement.type).toBe('number');
        });
        it('input value cannot be less than min', () => {
            component.model = { test: null, filters: { uniqueId: 12 } };
            fixture.detectChanges();
            const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;
            const err = fixture.debugElement.query(By.css('.usa-error-message'));

            expect(inputField.nativeElement.value).toBe('12');
            expect(component.form.invalid).toBe(true);
        });
        it('input value cannot be greter than max', () => {
            component.model = { test: null, filters: { uniqueId: 401 } };
            fixture.detectChanges();
            const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;
            const err = fixture.debugElement.query(By.css('.usa-error-message'));

            expect(inputField.nativeElement.value).toBe('401');
            expect(component.form.invalid).toBe(true);
        });
        it('input value length should be between min length and max length', () => {
            component.model = { test: null, filters: { uniqueId: 231 } };
            fixture.detectChanges();
            const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;
            expect(inputField.nativeElement.value.length).toBe(3);
        });
        it('input value length should be between min length and max length', () => {
            component.model = { test: null, filters: { uniqueId: 1 } };
            fixture.detectChanges();
            expect(component.form.invalid).toBe(true);
        });
    });

    describe('validation tests', () => {
        let component: SdsFiltersComponent;
        let fixture: ComponentFixture<SdsFiltersComponent>;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    SdsFormlyModule,
                    SdsFiltersModule
                ],

            });

            fixture = TestBed.createComponent(SdsFiltersComponent);
            component = fixture.componentInstance;
            component.fields = [
                {
                    key: 'filters',
                    wrappers: ['accordionwrapper'],
                    templateOptions: { label: 'Entity Name/UEI' },
                    fieldGroup: [{
                        key: 'uniqueId',
                        type: 'input',


                        templateOptions: {
                            required: true,
                            label: 'Formly input type number',
                            placeholder: 'placeholder',
                            minLength: 2,
                            maxLength: 4,
                            inputType: 'number',
                        },
                        validation: {
                            show: true,
                        },

                    }]
                },
            ];
            component.form = new FormGroup({});

        });
        it('validation value length should be between min length and max length', () => {
            component.model = { filters: { uniqueId: '4' } };
            fixture.detectChanges();

            const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;
            const err = fixture.debugElement.query(By.css('.usa-error-message'));

            inputField.nativeElement.value = '4';
            inputField.nativeElement.dispatchEvent(new Event('input'));
            fixture.detectChanges();


            expect(component.form.invalid).toBe(true);
        });

        it('value length should be between min length and max length', () => {
            component.model = { test: null, filters: { uniqueId: '45466' } };
            fixture.detectChanges();
            const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;
            inputField.nativeElement.value = '45466';
            inputField.nativeElement.dispatchEvent(new Event('input'));
            expect(component.form.invalid).toBe(true);
        });
    });
    describe('SdsDialog', () => {
        let dialog: SdsDialogService;
        let overlayContainerElement: HTMLElement;
      
        let testViewContainerRef: ViewContainerRef;
        let viewContainerFixture: ComponentFixture<ComponentWithChildViewContainer>;

        beforeEach(fakeAsync(() => {
            TestBed.configureTestingModule({
              imports: [SdsDialogModule, DialogTestModule],
            });
        
            TestBed.compileComponents();
          }));

          beforeEach(inject([SdsDialogService, OverlayContainer],
            (d: SdsDialogService, oc: OverlayContainer) => {
              dialog = d;
              overlayContainerElement = oc.getContainerElement();
            }));
        
     

        beforeEach(() => {
            viewContainerFixture = TestBed.createComponent(ComponentWithChildViewContainer);
        
            viewContainerFixture.detectChanges();
            testViewContainerRef = viewContainerFixture.componentInstance.childViewContainer;
          });
          it('should open a dialog with a template', () => {
            const templateRefFixture = TestBed.createComponent(ComponentWithTemplateRef);
            templateRefFixture.componentInstance.localValue = 'Bees';
            templateRefFixture.detectChanges();
        
            const data = {value: 'Knees'};
        
            let dialogRef = dialog.open(templateRefFixture.componentInstance.templateRef, { data });
        
            viewContainerFixture.detectChanges();
        
            expect(overlayContainerElement.textContent).toContain('Cheese Bees Knees');
            expect(templateRefFixture.componentInstance.dialogRef).toBe(dialogRef);
        
            viewContainerFixture.detectChanges();
        
            let dialogContainerElement = overlayContainerElement.querySelector('sds-dialog-container')!;
            expect(dialogContainerElement.getAttribute('role')).toBe('dialog');
        
            dialogRef.close();
          });

          it('should close the dialog when clicking on the close button', fakeAsync(() => {
            const templateRefFixture = TestBed.createComponent(ComponentWithTemplateRef);
            templateRefFixture.componentInstance.localValue = 'Bees';
            templateRefFixture.detectChanges();
        
            const data = {value: 'Knees'};
            let dialogRef = dialog.open(templateRefFixture.componentInstance.templateRef, { data });

            viewContainerFixture.detectChanges();
            expect(overlayContainerElement.querySelectorAll('.sds-dialog__container').length).toBe(1);
    
            (overlayContainerElement.querySelector('button[sds-dialog-close]') as HTMLElement).click();
            viewContainerFixture.detectChanges();
            flush();
    
            expect(overlayContainerElement.querySelectorAll('.sds-dialog__container').length).toBe(0);
          }));

          it('should close a dialog and get back a result', fakeAsync(() => {
            const templateRefFixture = TestBed.createComponent(ComponentWithTemplateRef);
            templateRefFixture.componentInstance.localValue = 'Bees';
            templateRefFixture.detectChanges();
        
            const data = {value: 'Knees'};
            let dialogRef = dialog.open(templateRefFixture.componentInstance.templateRef, { data });
            let afterCloseCallback = jasmine.createSpy('afterClose callback');
        
            dialogRef.afterClosed().subscribe(afterCloseCallback);
            dialogRef.close('Charmander');
            viewContainerFixture.detectChanges();
            flush();
        
            expect(afterCloseCallback).toHaveBeenCalledWith('Charmander');
            expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeNull();
          }));

    });

    describe('reset all models', () => {
        let component: SdsFiltersComponent;
        let fixture: ComponentFixture<SdsFiltersComponent>;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    CommonModule,
                    BrowserAnimationsModule,
                    SdsFormlyModule,
                    SdsFiltersModule
                ],

            });

            fixture = TestBed.createComponent(SdsFiltersComponent);
            component = fixture.componentInstance;
            component.fields = [
                {
                    key: 'filters',
                    wrappers: ['accordionwrapper'],
                    templateOptions: { label: 'Entity Name/UEI' },
                    fieldGroup: [
                        {
                            key: 'uniqueId',
                            type: 'input',
                            templateOptions: {
                                required: true,
                                label: 'Formly input type number',
                                placeholder: 'placeholder',
                                inputType: 'number',
                            },
                        },
                        {
                        key: 'button-test',
                        type: 'button',
                        templateOptions: {
                            text: 'Reset All',
                            btnType: 'info',
                            onClick: $event => {
                                component.model= {filters: null }; }
                        },
                    }]
                },
            ];
            component.form = new FormGroup({});

        });
        it('reset all should clear model', () => {
            component.model = {filters: { uniqueId: '4' } };
            fixture.detectChanges();

            const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;
            const buttonField: DebugElement = fixture.debugElement.query(By.css('.usa-button--unstyled')) as DebugElement;


            inputField.nativeElement.value = '4';
            inputField.nativeElement.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            buttonField.triggerEventHandler('click',null);
            spyOn(component, 'resetAll').and.callThrough();
            fixture.detectChanges();
            expect(component.model.filters).toBeNull();

        });

        
    });
});
@Directive({selector: 'dir-with-view-container'})
class DirectiveWithViewContainer {
  constructor(public viewContainerRef: ViewContainerRef) { }
}


@Component({
    selector: 'arbitrary-component-with-template-ref',
    template: `<ng-template let-data let-dialogRef="dialogRef">
        Cheese {{localValue}} {{data?.value}}{{setDialogRef(dialogRef)}}</ng-template>`,
  })
  class ComponentWithTemplateRef {
    localValue: string;
    dialogRef: SdsDialogRef<any>;
  
    @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  
    setDialogRef(dialogRef: SdsDialogRef<any>): string {
      this.dialogRef = dialogRef;
      return '';
    }
  }
  @Component({
    selector: 'arbitrary-component',
    template: `<dir-with-view-container></dir-with-view-container>`,
  })
  class ComponentWithChildViewContainer {
    @ViewChild(DirectiveWithViewContainer) childWithViewContainer: DirectiveWithViewContainer;
  
    get childViewContainer() {
      return this.childWithViewContainer.viewContainerRef;
    }
  }
  const TEST_DIRECTIVES = [
    ComponentWithChildViewContainer,
    ComponentWithTemplateRef,
    DirectiveWithViewContainer
  ];

  @NgModule({
    imports: [SdsDialogModule, NoopAnimationsModule],
    exports: TEST_DIRECTIVES,
    declarations: TEST_DIRECTIVES,
    entryComponents: [
        ComponentWithChildViewContainer,
        ComponentWithTemplateRef
    ],
  })
  class DialogTestModule { }
