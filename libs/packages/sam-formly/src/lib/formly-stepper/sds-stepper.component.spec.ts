import { CommonModule } from "@angular/common"
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { SdsFormlyModule } from "../formly/formly.module"
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  x,
  question,
  save,
  circle,
  slashCircleFill,
  checkCircleFill
} from "ngx-bootstrap-icons";
import { NavigationMode, SdsIconModule } from "libs/packages/components/src/lib/public-api";
import { RouterTestingModule } from "@angular/router/testing";
import { SdsStepperModule } from './sds-stepper.module';
import { Component, ViewChild } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";
import { SdsStepper } from "./sds-stepper";

@Component({
  selector: `custom-test-stepper`,
  template: `<div class="grid-row">
    <div class="desktop:grid-col-4 tablet-lg:grid-col-12 mobile-lg:grid-col-12 margin-bottom-3 margin-right-2">
      <div class="sds-card">
        <div class="sds-card__body sds-card__body--accent-cool">

          <ul class="usa-sidenav usa-sidenav--styled">
            <li *ngFor="let step of stepTemplates; let i = index;" class="usa-sidenav__item" [ngClass]="{
                'usa-current':  selectedStep?.id === step.id
              }">
              <ng-container [ngTemplateOutlet]="sidenavItem" [ngTemplateOutletContext]="{$implicit: step}">
              </ng-container>
              <ng-container [ngTemplateOutlet]="subPanelTemplate" [ngTemplateOutletContext]="{$implicit:step}">
              </ng-container>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="grid-col-fill">
      <div [ngTemplateOutlet]="selectedStep ? selectedStep.content : null"></div>

      <div class="grid-row grid-gap flex-justify-center margin-top-4">
        <div class="margin-right-1">
          <button class="usa-button sds-button--circle usa-button--base usa-button--big padding-2" sdsStepperPrevious
            [attr.id]="id + '-prevBtn'">
            <usa-icon [icon]="'chevron-left'"></usa-icon>
          </button>

          <label [attr.for]="id + '-prevBtn'" class="text-right usa-link cursor-pointer display-block margin-top-2">
            Go Back
          </label>
        </div>

        <div class="margin-right-1">
          <button class="usa-button sds-button--circle usa-button--big usa-button--base padding-2" sdsStepperSave
            [attr.id]="id + '-saveBtn'">
            <usa-icon [icon]="'save'"></usa-icon>
          </button>
          <label [attr.for]="id + '-saveBtn'" class="text-center usa-link cursor-pointer display-block margin-top-2">
            Save
          </label>
        </div>

        <div class="margin-right-1">
          <button class="usa-button sds-button--circle usa-button--base usa-button--big usa-button--active padding-2"
            sdsStepperNext [attr.id]="id + '-nextBtn'">
            <usa-icon [icon]="'chevron-right'"></usa-icon>
          </button>
          <label [attr.for]="id + '-nextBtn'" class="text-left usa-link cursor-pointer display-block margin-top-2">
            Save and Continue
          </label>
        </div>
      </div>
    </div>
  </div>

  <ng-template #subPanelTemplate let-panelItem>
    <div *ngFor="let pItem of getDisplayedSteps(panelItem.children); let i = index;">
      <ul class="usa-sidenav usa-sidenav--styled bg-base-lighter margin-x-0">
        <li class="usa-sidenav__item  padding-left-3" [ngClass]="{'usa-current':  selectedStep?.id === pItem.id }">
          <ng-container [ngTemplateOutlet]="sidenavItem" [ngTemplateOutletContext]="{$implicit: pItem}"></ng-container>
        </li>
      </ul>
    </div>
  </ng-template>

  <ng-template #sidenavItem let-step>
    <ng-container [ngSwitch]="step.editable">
      <span *ngSwitchCase="false">
        <span class="padding-x-2 padding-y-1 display-block text-bold">
          {{step.text}}
        </span>
      </span>
      <a *ngSwitchDefault href="javascript:void(0);" [sdsStepperNav]="step">
        <span>
          {{step.text}}
        </span>
        <ng-container [ngTemplateOutlet]="sidenavIcon" [ngTemplateOutletContext]="{$implicit: step}"></ng-container>
      </a>
    </ng-container>
  </ng-template>

  <ng-template #sidenavIcon let-step>
    <span class="float-right">
      <ng-container [ngSwitch]="step.valid">
        <usa-icon *ngSwitchCase="true" [icon]="'check-circle-fill'" class="text-primary"></usa-icon>
        <usa-icon *ngSwitchCase="false" [icon]="'slash-circle-fill'" class="text-error"></usa-icon>
        <usa-icon *ngSwitchDefault [icon]="'circle'"></usa-icon>
      </ng-container>
    </span>
  </ng-template>
  `,
  providers: [{provide: SdsStepper, useExisting: CustomTestStepper}]
})
export class CustomTestStepper extends SdsStepper {

}

@Component({
  selector: `stepper-test`,
  template: `
    <custom-test-stepper #stepper id="stepperTestId" [model]="model" [stepValidityMap]="stepValidityMap">
      <sds-step id="step1" text="Step 1" [fieldConfig]="fieldConfigStep1"></sds-step>
      <sds-step id="step2" text="Step 2" [editable]="false">
        <sds-step id="step2Child1" text="Step 2 Child 1" [fieldConfig]="fieldConfigStep2Child1"></sds-step>
      </sds-step>
      <sds-step id="step3" text="Step 3" [stepTemplate]="templateStep"></sds-step>
    </custom-test-stepper>

    <ng-template #templateStep>
      <span>Test template</span>
    </ng-template>
  `,
})
class StepperTestComponent {

  @ViewChild(CustomTestStepper) stepper: CustomTestStepper;

  navigationMode = NavigationMode;

  fieldConfigStep1: FormlyFieldConfig = {
    key: 'step1Input',
    type: 'input',
    templateOptions: {
      label: 'Step 1',
      required: true,
      minLength: 5
    }
  }

  fieldConfigStep2Child1: FormlyFieldConfig = {
    key: 'step2Child1Input',
    type: 'input',
    templateOptions: {
      label: 'Step 2 Child 1'
    }
  };

  model = {};
  stepValidityMap = {};
}

describe('SdsStepperComponent', () => {

  let component: StepperTestComponent;
  let fixture: ComponentFixture<StepperTestComponent>;
  let stepper: CustomTestStepper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SdsFormlyModule,
        NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, circle, slashCircleFill, checkCircleFill, question, save, x }),
        SdsIconModule,
        RouterTestingModule,
        SdsStepperModule,
        NoopAnimationsModule,
      ],
      declarations: [
        StepperTestComponent,
        CustomTestStepper,
      ]
    });

    fixture = TestBed.createComponent(StepperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    stepper = component.stepper;
  });

  it('Should create with expected steps', () => {
    expect(stepper).toBeDefined();
    expect(stepper.stepTemplates.toArray()[1].children.length).toEqual(1);
    expect(stepper.flatSteps.length).toEqual(3);
    expect(stepper.currentStepId).toEqual('step1');

    const validSteps = fixture.debugElement.queryAll(By.css('.bi sds-check'));
    const invalidSteps = fixture.debugElement.queryAll(By.css('.bi bi-x'));
    expect(validSteps.length).toEqual(0);
    expect(invalidSteps.length).toEqual(0);
  });

  it('Should move to next step when next button is clicked', waitForAsync(() => {
    expect(stepper.currentStepId).toEqual('step1');
    const nextButton = fixture.debugElement.query(By.css('#stepperTestId-nextBtn'));
    nextButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(stepper.currentStepId).toEqual('step2Child1');
    });
  }));

  it('Should mark invalid step when moving to next step', () => {
    expect(stepper.currentStepId).toEqual('step1');

    // Triggers min length of 5 validation in example component
    stepper.flatSteps[0].fieldConfig.formControl.setValue('test');

    const nextButton = fixture.debugElement.query(By.css('#stepperTestId-nextBtn'));
    nextButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stepper.stepValidityMap['step1']).toEqual(false);
  });

  it('Should trigger validation on save click', () => {
    // Triggers min length of 5 validation in example component
    stepper.flatSteps[0].fieldConfig.formControl.setValue('test');

    const saveButton = fixture.debugElement.query(By.css('#stepperTestId-saveBtn'));
    saveButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stepper.stepValidityMap['step1']).toEqual(false);
  });

  it('Should jump to step 3 when clicking from side navigation', waitForAsync(() => {
    const sidenavLinks = fixture.debugElement.queryAll(By.css('li a'));
    sidenavLinks[2].triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(stepper.currentStepId).toEqual('step3');
    });
  }));

  it('Should go back to previous step when back is clicked', waitForAsync(() => {
    const sidenavLinks = fixture.debugElement.queryAll(By.css('li a'));
    sidenavLinks[2].triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const backButton = fixture.debugElement.query(By.css('#stepperTestId-prevBtn'));
      backButton.triggerEventHandler('click', null);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(stepper.currentStepId).toEqual('step2Child1');
      });
    })

  }));

  it('Should prepopulate with correct model and validity when provided', () => {
    component.model = {
      step1Input: 'test'
    };

    component.stepValidityMap = {
      step1: false
    };

    fixture.detectChanges();

    const validSteps = fixture.debugElement.queryAll(By.css('.bi-check-circle-fill'));
    const invalidSteps = fixture.debugElement.queryAll(By.css('.bi-slash-circle-fill'));

    expect(validSteps.length).toEqual(0);
    expect(invalidSteps.length).toEqual(1);
  });
})
