
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
import { RouterTestingModule } from '@angular/router/testing';
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
                    RouterTestingModule.withRoutes([]),
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
            expect(component.form.invalid).toBe(true);
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
                    RouterTestingModule.withRoutes([]),
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

        let component: SdsFiltersComponent;
        let fixture: ComponentFixture<SdsFiltersComponent>;

        beforeEach(fakeAsync(() => {
            TestBed.configureTestingModule({
              imports: [SdsDialogModule, 
                DialogTestModule,  
                CommonModule,
                BrowserAnimationsModule,
                SdsFormlyModule,
                SdsFiltersModule],
            });
        
            fixture = TestBed.createComponent(SdsFiltersComponent);
            component = fixture.componentInstance;
            component.fields = [
                {
                    type: 'input',
                    key:'keywordFilter',
                    templateOptions: {
                      label: 'Keyword',
                      disableHide: true
                    },
                    },
                    {
                        key: 'expirationDate',
                        wrappers: ['accordionwrapper'],
                        templateOptions: { label: 'Date' },
                        fieldGroup: [
                          {
                            key: 'currentDateFilter',
                            type: 'datepicker',
                            hideExpression: true,
                            templateOptions: {
                              label: 'Current Date',
                            }
                          },
                          {
                            key: 'publishDateFilter',
                            type: 'datepicker',
                            templateOptions: {
                              label: 'Publish Date',
                            }
                          },
                          {
                            key: 'lastModifiedDateFilter',
                            type: 'datepicker',
                            templateOptions: {
                              label: 'Last Modified Date',
                            }
                          },
                        ]
                      },
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
                        
                          
                    ]
                },
                
            ];
            component.form = new FormGroup({});

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
        
            component.showMoreFilters=true;
            fixture.detectChanges();
            spyOn(component, 'openDialog').and.callThrough();
           

            let moreFiltersButton = fixture.debugElement.query(By.css('.usa-button--unstyled')) as DebugElement;
            moreFiltersButton.nativeElement.click();
            fixture.detectChanges();

          

          });

    //  it('should close a dialog and get back a result', fakeAsync(() => {
    //     component.showMoreFilters=true;
    //     fixture.detectChanges();
    //     let val = spyOn(component, 'openDialog').and.callThrough();
       
       
    //     let moreFiltersButton = fixture.debugElement.query(By.css('.usa-button--unstyled')) as DebugElement;
    //     moreFiltersButton.nativeElement.click();
    //     fixture.detectChanges();

    //     let data= {fieldsToRender: component.fields, fieldToBind: component.dialogData }
    //     let afterCloseCallback = jasmine.createSpy('afterClose callback');
    //     component.dialogRef.afterClosed().subscribe(afterCloseCallback);
       
    //     component.dialogRef.close(data);
    //     fixture.detectChanges();
    //     flush();
    
    //     expect(afterCloseCallback).toHaveBeenCalledWith(data);
    //   //  expect(overlayContainerElement.querySelector('sds-dialog-container')).toBeNull();

    //        }));




        //   it('should close the dialog when clicking on the close button', fakeAsync(() => {
        //       component.showMoreFilters=true;
        //         fixture.detectChanges();
        //         let val = spyOn(component, 'openDialog').and.callThrough();
       
       
        //     let moreFiltersButton = fixture.debugElement.query(By.css('.usa-button--unstyled')) as DebugElement;
        //     moreFiltersButton.nativeElement.click();
        //     fixture.detectChanges();
        
        //    // const data = {value: 'Knees'};
        //   //  let dialogRef = dialog.open(templateRefFixture.componentInstance.templateRef, { data });

        //   //  viewContainerFixture.detectChanges();
        //   //console.log(component.dialogRef.componentInstance);
        //     expect(component.dialogRef.componentInstance.length).toBe(1);
    
        //    // (overlayContainerElement.querySelector('button[sds-dialog-close]') as HTMLElement).click();
        //  //   viewContainerFixture.detectChanges();
        //  //   flush();
    
        //   //  expect(overlayContainerElement.querySelectorAll('.sds-dialog__container').length).toBe(0);
        //   }));

        

    });

    describe('reset model', () => {
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
                        }
                    ]
                },
            ];
            component.form = new FormGroup({});

        });
        it('reset all should clear model', () => {
            component.model = {filters: { uniqueId: '4' } };
            component.showResetAll=true;
            fixture.detectChanges();
            spyOn(component, 'resetAll').and.callThrough();
            const inputField = fixture.debugElement.query(By.css('.usa-input')) as DebugElement;

            inputField.nativeElement.value = '4';
            inputField.nativeElement.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            let resetButton = fixture.debugElement.query(By.css('.usa-button--unstyled')) as DebugElement;
            resetButton.nativeElement.click();
            fixture.detectChanges();
            expect(component.model).toBeNull();

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
