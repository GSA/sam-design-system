
import {
    TestBed,
    ComponentFixture,
    fakeAsync,
    inject,
    flush,
    discardPeriodicTasks,
} from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormGroup,FormsModule  } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SdsFiltersModule } from './sds-filters.module';
import { SdsFormlyModule } from '../formly/formly.module';
import {
    SdsFiltersComponent, SdsAdvancedFilterDialog
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
    SdsDialogModule,
    SDS_DIALOG_DATA
  } from '@gsa-sam/components';
  import {OverlayContainer, ScrollStrategy, Overlay} from '@angular/cdk/overlay';
import { tick } from '@angular/core/src/render3';
import { of } from 'rxjs';
import { CheckType } from '@angular/core/src/view';
import { componentFactoryName } from '@angular/compiler';

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
       
let data: any;
        const dialogMock = {
            close: () => { }
        };

        beforeEach(fakeAsync(() => {
            TestBed.configureTestingModule({
              imports: [SdsDialogModule, 
                DialogTestModule,  
                CommonModule,
                BrowserAnimationsModule,
                SdsFormlyModule,
                SdsFiltersModule],
                providers: [
                     {provide: SdsDialogRef, useValue:[dialogMock]},
                     {provide: SDS_DIALOG_DATA, useValue: [data]}]
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
            data= {fieldsToRender: component.fields, fieldToBind: component.dialogData }

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
           it('should close the dialog when clicking on the close button', fakeAsync(() => {
               
            component.showMoreFilters=true;
            fixture.detectChanges();
            spyOn(component, 'openDialog').and.callThrough();
       
       
            let moreFiltersButton = fixture.debugElement.query(By.css('.usa-button--unstyled')) as DebugElement;
            moreFiltersButton.nativeElement.click();
            fixture.detectChanges();

           
           let fixtureDialog = TestBed.createComponent(SdsAdvancedFilterDialog);
           let componentDialog = fixtureDialog.componentInstance;

            let spy = spyOn(component.dialogRef, 'close').and.callThrough();
            const cancelButton = fixtureDialog.debugElement.nativeElement.querySelector('#cancelButton');
            cancelButton.click();
            fixtureDialog.detectChanges();

          }));

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

    describe('InformationDialog', () => {
        let dialog: SdsDialogService;
        let overlayContainerElement: HTMLElement;
      
        let noop: ComponentFixture<NoopComponent>;
        let component: SdsFiltersComponent;
        let dialogData2=[];
        beforeEach(() => {
          TestBed.configureTestingModule({
            imports: [ DialogTestModule,  FormsModule, SdsFiltersModule
                 ],
            providers: [
              { provide: OverlayContainer, useFactory: () => {
                overlayContainerElement = document.createElement('div');
                return { getContainerElement: () => overlayContainerElement };
              }}
            ]
          });
          let fixture = TestBed.createComponent(SdsFiltersComponent);
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
          dialog = TestBed.get(SdsDialogService);
      
          noop = TestBed.createComponent(NoopComponent);
          
          component.fields.forEach(element => {
            if(element.fieldGroup && element.fieldGroup.length > 1)
            {
              let chlidElements: any = [];
                element.fieldGroup.forEach(childElement => {
                      chlidElements.push({"elementKey": childElement.key, "value": childElement.hideExpression === undefined ? false : childElement.hideExpression});
                  });
                  dialogData2.push({"elementKey": element.key, "value": element.hideExpression === undefined ? false : element.hideExpression, "childFieldCollection": chlidElements});
            }
            else{
              dialogData2.push({"elementKey": element.key, "value": element.hideExpression === undefined ? false : element.hideExpression, "childFieldCollection": null});
            }
          });
        });
        var myObj = {
            name: 'test',
            getBoundingClientRect: function () {
                return {top: 100}
            }
        }
        it('should click the checkox and update the model', () => {

          const config = {
            data: {fieldsToRender: component.fields, fieldToBind: dialogData2}
          };
          dialog.open(SdsAdvancedFilterDialog, config);
      
          noop.detectChanges(); // Updates the dialog in the overlay
      
          let checkboxElement=overlayContainerElement.querySelector("#chkexpirationDate") as HTMLInputElement;
          spyOn(document, "getElementById").and.callFake(function() {
            return {
                id: 'chkexpirationDate'
            }
        }); 
        checkboxElement.click();
        });


        it('should close the dialog and return the result', fakeAsync(() => {

            const config = {
              data: {fieldsToRender: component.fields, fieldToBind: dialogData2}
            };
         
          spyOn(component.dialog, 'open').and.returnValue({afterClosed: ()=> of(config.data)});
          component.openDialog();
          
          }));
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


  @Component({
    template: ''
  })
  class NoopComponent {}

  const TEST_DIRECTIVES = [
    ComponentWithChildViewContainer,
    ComponentWithTemplateRef,
    DirectiveWithViewContainer,
    NoopComponent,
  
  ];

  @NgModule({
    imports: [SdsDialogModule, NoopAnimationsModule, FormsModule],
    exports: TEST_DIRECTIVES,
    declarations: TEST_DIRECTIVES,
    entryComponents: [
        ComponentWithChildViewContainer,
        ComponentWithTemplateRef,
        SdsAdvancedFilterDialog,
    ],
  })
  class DialogTestModule { }
