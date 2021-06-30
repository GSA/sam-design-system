import { CommonModule } from "@angular/common"
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { SdsFormlyModule } from "../formly/formly.module"
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  x,
  check,
} from "ngx-bootstrap-icons";
import { NavigationMode, SdsIconModule } from "libs/packages/components/src/lib/public-api";
import { RouterTestingModule } from "@angular/router/testing";
import { SdsStepperModule } from './sds-stepper.module';
import { Component, ViewChild } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { SdsStepperComponent } from "./sds-stepper.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

@Component({
  selector: `stepper-test`,
  template: `
    <sds-stepper #stepper id="stepperTestId" [model]="model" [stepValidityMap]="stepValidityMap">
      <sds-step id="step1" text="Step 1" [fieldConfig]="fieldConfigStep1" [mode]="navigationMode.INTERNAL"></sds-step>
      <sds-step id="step2" text="Step 2" [mode]="navigationMode.LABEL">
        <sds-step id="step2Child1" text="Step 2 Child 1" [fieldConfig]="fieldConfigStep2Child1" [mode]="navigationMode.INTERNAL"></sds-step>
      </sds-step>
      <sds-step id="step3" text="Step 3" [stepTemplate]="templateStep" [mode]="navigationMode.INTERNAL"></sds-step>
    </sds-stepper>

    <ng-template #templateStep>
      <span>Test template</span>
    </ng-template>
  `,
})
class StepperTestComponent {

  @ViewChild(SdsStepperComponent) stepper: SdsStepperComponent;

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
  let stepper: SdsStepperComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SdsFormlyModule,
        NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, x, check }),
        SdsIconModule,
        RouterTestingModule,
        SdsStepperModule,
        NoopAnimationsModule,
      ],
      declarations: [
        StepperTestComponent
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
    expect(stepper._stepsDef.length).toEqual(3);
    expect(stepper.currentStepId).toEqual('step1');

    const validSteps = fixture.debugElement.queryAll(By.css('.bi sds-check'));
    const invalidSteps = fixture.debugElement.queryAll(By.css('.bi bi-x'));
    expect(validSteps.length).toEqual(0);
    expect(invalidSteps.length).toEqual(0);
  });

  it('Should move to next step when next button is clicked', () => {
    expect(stepper.currentStepId).toEqual('step1');
    const nextButton = fixture.debugElement.query(By.css('#stepperTestId-nextBtn'));
    nextButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stepper.currentStepId).toEqual('step2Child1');
  });

  it('Should mark invalid step when moving to next step', () => {
    expect(stepper.currentStepId).toEqual('step1');

    // Triggers min length of 5 validation in example component
    stepper._stepsDef[0].fieldConfig.formControl.setValue('test');

    const nextButton = fixture.debugElement.query(By.css('#stepperTestId-nextBtn'));
    nextButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stepper.stepValidityMap['step1']).toEqual(false);
  });

  it('Should trigger validation on save click', () => {
    // Triggers min length of 5 validation in example component
    stepper._stepsDef[0].fieldConfig.formControl.setValue('test');

    const nextButton = fixture.debugElement.query(By.css('#stepperTestId-saveBtn'));
    nextButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stepper.stepValidityMap['step1']).toEqual(false);
  });

  it('Should jump to step 3 when clicking from side navigation', () => {
    const sidenavLinks = fixture.debugElement.queryAll(By.css('li a'));
    sidenavLinks[2].triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stepper.currentStepId).toEqual('step3');
  });

  it('Should go back to previous step when back is clicked', () => {
    const sidenavLinks = fixture.debugElement.queryAll(By.css('li a'));
    sidenavLinks[2].triggerEventHandler('click', null);
    fixture.detectChanges();

    const backButton = fixture.debugElement.query(By.css('#stepperTestId-prevBtn'));
    backButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stepper.currentStepId).toEqual('step2Child1');
  });

  it('Should prepopulate with correct model and validity when provided', () => {
    component.model = {
      step1Input: 'test'
    };

    component.stepValidityMap = {
      step1: false
    };

    fixture.detectChanges();
    const validSteps = fixture.debugElement.queryAll(By.css('.sds-check'));
    const invalidSteps = fixture.debugElement.queryAll(By.css('.bi-x'));
    expect(validSteps.length).toEqual(0);
    expect(invalidSteps.length).toEqual(1);
  })
})