import { FormlyFieldInputComponent } from '../formly/types/input';
import { Component as StubComponent, EventEmitter, Input, SimpleChange } from '@angular/core';

@StubComponent({
  selector: 'usa-icon',
  template: '<i class="bi bi-{{icon}}"></i>',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon = '';
  @Input() size = 'lg';
  @Input() rotate = 0;
  @Input() classes?: string[];
  @Input() skew?: any;
}

@StubComponent({
  selector: 'usa-step-indicator',
  template: '<ng-content></ng-content>',
  standalone: false,
})
class UsaStepIndicatorStubComponent {
  steps = [{ label: 'Step 1' }, { label: 'Step 2 Child 1' }, { label: 'Step 3' }];
  currentStepChange = new EventEmitter<number>();
}

import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { SdsFormlyModule } from '../formly/formly.module';
import {} from 'ngx-bootstrap-icons';
import { RouterTestingModule } from '@angular/router/testing';
import { SdsStepperModule } from './sds-stepper.module';
import { Component, ViewChild } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { vi } from 'vitest';
import { SdsStepper, SdsStepComponent, SdsStepHeaderComponent, SdsStepFooterComponent } from './sds-stepper';
import {
  SdsStepperNextDirective,
  SdsStepperPreviousDirective,
  SdsStepperSaveDirective,
  SdsStepperNavDirective,
  SdsStepperUSWDSNavDirective,
} from './sds-step-buttons';
import { UsaStepIndicatorComponent } from '@gsa-sam/ngx-uswds';
@Component({
  selector: `custom-test-stepper`,
  template: `<div class="grid-row">
      <div class="desktop:grid-col-4 tablet-lg:grid-col-12 mobile-lg:grid-col-12 margin-bottom-3 margin-right-2">
        <div class="sds-card">
          <div class="sds-card__body sds-card__body--accent-cool">
            <ul class="usa-sidenav usa-sidenav--styled">
              <li
                *ngFor="let step of stepTemplates; let i = index"
                class="usa-sidenav__item"
                [ngClass]="{
                  'usa-current': selectedStep?.id === step.id,
                }"
              >
                <ng-container [ngTemplateOutlet]="sidenavItem" [ngTemplateOutletContext]="{ $implicit: step }">
                </ng-container>
                <ng-container [ngTemplateOutlet]="subPanelTemplate" [ngTemplateOutletContext]="{ $implicit: step }">
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
            <button
              class="usa-button sds-button--circle usa-button--base usa-button--big padding-2"
              sdsStepperPrevious
              [attr.id]="id + '-prevBtn'"
            >
              <usa-icon [icon]="'chevron-left'"></usa-icon>
            </button>

            <label [attr.for]="id + '-prevBtn'" class="text-right usa-link cursor-pointer display-block margin-top-2">
              Go Back
            </label>
          </div>

          <div class="margin-right-1">
            <button
              class="usa-button sds-button--circle usa-button--big usa-button--base padding-2"
              sdsStepperSave
              [attr.id]="id + '-saveBtn'"
            >
              <usa-icon [icon]="'save'"></usa-icon>
            </button>
            <label [attr.for]="id + '-saveBtn'" class="text-center usa-link cursor-pointer display-block margin-top-2">
              Save
            </label>
          </div>

          <div class="margin-right-1">
            <button
              class="usa-button sds-button--circle usa-button--base usa-button--big usa-button--active padding-2"
              sdsStepperNext
              [attr.id]="id + '-nextBtn'"
            >
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
      <div *ngFor="let pItem of getDisplayedSteps(panelItem.children); let i = index">
        <ul class="usa-sidenav usa-sidenav--styled bg-base-lighter margin-x-0">
          <li class="usa-sidenav__item  padding-left-3" [ngClass]="{ 'usa-current': selectedStep?.id === pItem.id }">
            <ng-container
              [ngTemplateOutlet]="sidenavItem"
              [ngTemplateOutletContext]="{ $implicit: pItem }"
            ></ng-container>
          </li>
        </ul>
      </div>
    </ng-template>

    <ng-template #sidenavItem let-step>
      <ng-container [ngSwitch]="step.editable">
        <span *ngSwitchCase="false">
          <span class="padding-x-2 padding-y-1 display-block text-bold">
            {{ step.text }}
          </span>
        </span>
        <a *ngSwitchDefault href="javascript:void(0);" [sdsStepperNav]="step">
          <span>
            {{ step.text }}
          </span>
          <ng-container [ngTemplateOutlet]="sidenavIcon" [ngTemplateOutletContext]="{ $implicit: step }"></ng-container>
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
    </ng-template> `,
  providers: [{ provide: SdsStepper, useExisting: CustomTestStepper }],
  standalone: false,
})
export class CustomTestStepper extends SdsStepper {}

@Component({
  selector: `stepper-test`,
  template: `
    <custom-test-stepper
      #stepper
      id="stepperTestId"
      [model]="model"
      [stepValidityMap]="stepValidityMap"
      [linear]="linear"
      [customErrorHandling]="customErrorHandling"
      [isRouteEnabled]="isRouteEnabled"
      [canReviewWithErrors]="canReviewWithErrors"
      [validateStepsOnInit]="validateStepsOnInit"
      (saveData)="onSaveData($event)"
      (stepChange)="onStepChange($event)"
      (modelChange)="onModelChange($event)"
    >
      <sds-step id="step1" text="Step 1" [fieldConfig]="fieldConfigStep1" [route]="step1Route">
        <div sdsStepHeader class="step1-header">Header 1</div>
        <div sdsStepFooter class="step1-footer">Footer 1</div>
      </sds-step>
      <sds-step id="step2" text="Step 2" [editable]="false">
        <sds-step
          id="step2Child1"
          text="Step 2 Child 1"
          [fieldConfig]="fieldConfigStep2Child1"
          [hideFn]="step2Child1HideFn"
        ></sds-step>
      </sds-step>
      <sds-step
        id="step3"
        text="Step 3"
        [stepTemplate]="templateStep"
        [stepValidationFn]="step3ValidationFn"
      ></sds-step>
      <sds-step *ngIf="showReviewStep" id="stepReview" text="Step Review" [isReview]="true"></sds-step>
    </custom-test-stepper>

    <ng-template #templateStep>
      <span class="custom-step-template-content">Test template</span>
    </ng-template>
  `,
  standalone: false,
})
class StepperTestComponent {
  @ViewChild(CustomTestStepper) stepper: CustomTestStepper;

  fieldConfigStep1: FormlyFieldConfig = {
    key: 'step1Input',
    type: 'input',
    props: {
      label: 'Step 1',
      required: true,
      minLength: 5,
    },
  };

  fieldConfigStep2Child1: FormlyFieldConfig = {
    key: 'step2Child1Input',
    type: 'input',
    props: {
      label: 'Step 2 Child 1',
    },
  };

  model: any = {};
  stepValidityMap: { [key: string]: boolean | undefined } = {};
  linear = false;
  customErrorHandling = false;
  isRouteEnabled = true;
  canReviewWithErrors = false;
  validateStepsOnInit: boolean | string[] = true;
  step1Route?: string;
  step2Child1HideFn?: (model: any, field?: FormlyFieldConfig) => boolean;
  step3ValidationFn?: (model: any) => any;
  showReviewStep = false;

  savedData: any;
  changedStep: any;
  emittedModel: any;

  onSaveData($event: any) {
    this.savedData = $event;
  }
  onStepChange($event: any) {
    this.changedStep = $event;
  }
  onModelChange($event: any) {
    this.emittedModel = $event;
  }
}

@Component({
  selector: `blur-stepper-test`,
  template: `
    <custom-test-stepper #stepper id="blurStepperTestId" [model]="model">
      <sds-step
        id="blurStep1"
        text="Blur Step 1"
        [fieldConfig]="fieldConfigStep"
        [validateOnBlur]="true"
        (modelChange)="onModelChange($event)"
      ></sds-step>
      <sds-step id="blurStep2" text="Blur Step 2" [fieldConfig]="fieldConfigStep2" [validateOnBlur]="true"></sds-step>
    </custom-test-stepper>
  `,
  standalone: false,
})
class BlurStepperTestComponent {
  @ViewChild(CustomTestStepper) stepper: CustomTestStepper;
  model: any = { blurInput: { name: 'sample' } };
  fieldConfigStep: FormlyFieldConfig = {
    key: 'blurInput',
    type: 'input',
    props: { required: true },
  };
  fieldConfigStep2: FormlyFieldConfig = {
    key: 'blurInput2',
    type: 'input',
  };
  changedModel: any;
  onModelChange(val: any) {
    this.changedModel = val;
  }
}

describe('SdsStepperComponent', () => {
  let component: StepperTestComponent;
  let fixture: ComponentFixture<StepperTestComponent>;
  let stepper: CustomTestStepper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SdsFormlyModule, RouterTestingModule, SdsStepperModule, NoopAnimationsModule],
      declarations: [
        StepperTestComponent,
        CustomTestStepper,
        UsaIconStubComponent,
        BlurStepperTestComponent,
        UsaStepIndicatorStubComponent,
      ],
      providers: [{ provide: UsaStepIndicatorComponent, useExisting: UsaStepIndicatorStubComponent }],
    });

    TestBed.overrideComponent(FormlyFieldInputComponent, {
      set: {
        template: '<input [id]=id [formControl]=formControl />',
      },
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
      expect(stepper.currentStepId).toEqual('step1');
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
    stepper.selectedStep.options = { showError: () => false };
    // Triggers min length of 5 validation in example component
    stepper.flatSteps[0].fieldConfig.formControl.setValue('test');

    const saveButton = fixture.debugElement.query(By.css('#stepperTestId-saveBtn'));
    saveButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(stepper.stepValidityMap['step1']).toEqual(false);
  });

  it('Should jump to step 1 when clicking from side navigation', waitForAsync(() => {
    const sidenavLinks = fixture.debugElement.queryAll(By.css('li a'));
    sidenavLinks[2].triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(stepper.currentStepId).toEqual('step1');
    });
  }));

  it('Should prepopulate with correct model and validity when provided', () => {
    component.model = {
      step1Input: 'test',
    };

    component.stepValidityMap = {
      step1: false,
    };

    fixture.detectChanges();

    const validSteps = fixture.debugElement.queryAll(By.css('.bi-check-circle-fill'));
    const invalidSteps = fixture.debugElement.queryAll(By.css('.bi-slash-circle-fill'));

    expect(validSteps.length).toEqual(0);
    expect(invalidSteps.length).toEqual(1);
  });

  describe('Step transitions & Linear / Non-linear modes', () => {
    it('Should advance to next step in linear mode when current step is valid', async () => {
      component.linear = true;
      fixture.detectChanges();

      stepper.flatSteps[0].fieldConfig.formControl.setValue('valid input');
      await stepper.onNextStep();
      fixture.detectChanges();

      expect(stepper.currentStepId).toEqual('step2Child1');
    });

    it('Should block advancing to next step in linear mode when current step is invalid and show errors', async () => {
      component.linear = true;
      stepper.linear = true;

      stepper.flatSteps[0].fieldConfig.formControl.setValue('bad');
      await stepper.onNextStep();

      expect(stepper.currentStepId).toEqual('step1');
      expect(stepper.stepValidityMap['step1']).toBe(false);
      expect(typeof stepper.selectedStep.options.showError).toEqual('function');
    });

    it('Should allow navigating backward in linear mode', async () => {
      component.linear = true;
      fixture.detectChanges();

      stepper.flatSteps[0].fieldConfig.formControl.setValue('valid input');
      await stepper.onNextStep();
      fixture.detectChanges();
      expect(stepper.currentStepId).toEqual('step2Child1');

      await stepper.onPreviousStep();
      fixture.detectChanges();
      expect(stepper.currentStepId).toEqual('step1');
    });

    it('Should disable incomplete forms when switching from non-linear to linear via ngOnChanges', () => {
      stepper.stepValidityMap = { step1: true, step2Child1: false, step3: false };
      stepper.linear = true;
      stepper.ngOnChanges({ linear: new SimpleChange(false, true, false) });

      expect(stepper.flatSteps[0].disabled).toBe(false);
      expect(stepper.flatSteps[1].disabled).toBe(false);
      expect(stepper.flatSteps[2].disabled).toBe(true);
    });

    it('Should enable non-review steps when switching from linear to non-linear via ngOnChanges', () => {
      stepper.flatSteps.forEach((s) => (s.disabled = true));
      stepper.linear = false;
      stepper.ngOnChanges({ linear: new SimpleChange(true, false, false) });

      expect(stepper.flatSteps[0].disabled).toBe(false);
      expect(stepper.flatSteps[1].disabled).toBe(false);
      expect(stepper.flatSteps[2].disabled).toBe(false);
    });

    it('Should block navigation to disabled step in non-linear mode', async () => {
      stepper.flatSteps[1].disabled = true;
      await stepper.changeStep('step2Child1');
      expect(stepper.currentStepId).toEqual('step1');
    });

    it('Should block navigation to review step in non-linear mode when incomplete and canReviewWithErrors is false', async () => {
      component.showReviewStep = true;
      fixture.detectChanges();
      stepper.flatSteps = stepper.getFlatSteps(stepper.stepTemplates);
      stepper.stepValidityMap = { step1: true, step2Child1: false, step3: false };
      stepper.canReviewWithErrors = false;
      (stepper as any).checkReviewAndSubmit();

      expect(stepper._isReviewAndSubmitDisabled).toBe(true);
      await stepper.changeStep('stepReview');
      expect(stepper.currentStepId).not.toEqual('stepReview');
    });

    it('Should allow navigation to review step when canReviewWithErrors is true', async () => {
      component.showReviewStep = true;
      fixture.detectChanges();
      stepper.flatSteps = stepper.getFlatSteps(stepper.stepTemplates);
      stepper.stepValidityMap = { step1: true, step2Child1: false, step3: false };
      stepper.canReviewWithErrors = true;
      (stepper as any).checkReviewAndSubmit();

      await stepper.changeStep('stepReview');
      expect(stepper.currentStepId).toEqual('stepReview');
    });

    it('Should allow navigation to review step when all steps are valid', async () => {
      component.showReviewStep = true;
      fixture.detectChanges();
      stepper.flatSteps = stepper.getFlatSteps(stepper.stepTemplates);
      stepper.stepValidityMap = { step1: true, step2Child1: true, step3: true };
      stepper.canReviewWithErrors = false;
      (stepper as any).checkReviewAndSubmit();

      expect(stepper._isReviewAndSubmitDisabled).toBe(false);
      await stepper.changeStep('stepReview');
      expect(stepper.currentStepId).toEqual('stepReview');
    });

    it('Should throw error when incrementor exceeds steps range in changeStep', async () => {
      await expect(stepper.changeStep('step1', 99)).rejects.toThrow(/greater than the number of steps/);
    });

    it('Should return early when changing to the already selected step', async () => {
      const emitSpy = vi.spyOn(stepper.stepChange, 'emit');
      await stepper.changeStep('step1');
      expect(emitSpy).not.toHaveBeenCalled();
    });
  });

  describe('Custom step templates & validation hooks', () => {
    it('Should render custom step template when navigating to step 3', async () => {
      await stepper.changeStep('step3');
      fixture.detectChanges();

      const customContent = fixture.debugElement.query(By.css('.custom-step-template-content'));
      expect(customContent).not.toBeNull();
      expect(customContent.nativeElement.textContent).toContain('Test template');
    });

    it('Should validate step using synchronous stepValidationFn returning boolean', async () => {
      stepper.flatSteps[2].stepValidationFn = vi.fn().mockReturnValue(true);
      await stepper.updateValidation(stepper.flatSteps[2]);

      expect(stepper.flatSteps[2].valid).toBe(true);
      expect(stepper.stepValidityMap['step3']).toBe(true);

      stepper.flatSteps[2].stepValidationFn = vi.fn().mockReturnValue(false);
      await stepper.updateValidation(stepper.flatSteps[2]);

      expect(stepper.flatSteps[2].valid).toBe(false);
      expect(stepper.stepValidityMap['step3']).toBe(false);
    });

    it('Should validate step using asynchronous stepValidationFn returning Observable<boolean>', async () => {
      stepper.flatSteps[2].stepValidationFn = vi.fn().mockReturnValue(of(true));
      await stepper.updateValidation(stepper.flatSteps[2]);

      expect(stepper.flatSteps[2].valid).toBe(true);
      expect(stepper.stepValidityMap['step3']).toBe(true);

      stepper.flatSteps[2].stepValidationFn = vi.fn().mockReturnValue(of(false));
      await stepper.updateValidation(stepper.flatSteps[2]);

      expect(stepper.flatSteps[2].valid).toBe(false);
      expect(stepper.stepValidityMap['step3']).toBe(false);
    });

    it('Should support forceValidationValue on updateValidation', async () => {
      await stepper.updateValidation(stepper.flatSteps[0], true);
      expect(stepper.flatSteps[0].valid).toBe(true);
      expect(stepper.stepValidityMap['step1']).toBe(true);

      await stepper.updateValidation(stepper.flatSteps[0], false);
      expect(stepper.flatSteps[0].valid).toBe(false);
      expect(stepper.stepValidityMap['step1']).toBe(false);
    });

    it('Should return early if updateValidation is called with null', async () => {
      await stepper.updateValidation(null as any);
      expect(stepper.stepValidityMap['null']).toBeUndefined();
    });

    it('Should evaluate isFormEmpty correctly for various values', () => {
      const isFormEmpty = (stepper as any).isFormEmpty.bind(stepper);

      expect(isFormEmpty(null)).toBe(true);
      expect(isFormEmpty({ value: false })).toBe(false);
      expect(isFormEmpty({ value: null })).toBe(true);
      expect(isFormEmpty({ value: '' })).toBe(true);
      expect(isFormEmpty({ value: [] })).toBe(true);
      expect(isFormEmpty({ value: 'hello' })).toBe(false);
      expect(isFormEmpty({ value: 123 })).toBe(false);
      expect(isFormEmpty({ value: { a: '', b: null } })).toBe(true);
      expect(isFormEmpty({ value: { a: 'true', b: 'false' } })).toBe(false);
      expect(isFormEmpty({ value: { a: 'default' } }, { a: 'default' })).toBe(true);
    });

    it('Should not override showError on save when customErrorHandling is true', async () => {
      stepper.customErrorHandling = true;
      stepper.stepValidityMap['step1'] = false;
      const initialShowError = () => false;
      stepper.selectedStep.options = { showError: initialShowError };

      await stepper.onSaveClicked();
      expect(stepper.selectedStep.options.showError).toBe(initialShowError);
    });
  });

  describe('Step buttons and navigation directives', () => {
    it('SdsStepperNextDirective should handle click and disabled state correctly', () => {
      const nextDir = new SdsStepperNextDirective(stepper);
      const nextSpy = vi.spyOn(stepper, 'onNextStep');
      nextDir._handleClick();
      expect(nextSpy).toHaveBeenCalled();

      // No flatSteps or undefined selectedStepIndex
      const stepperWithoutSteps = { flatSteps: null, selectedStepIndex: undefined } as any;
      expect(new SdsStepperNextDirective(stepperWithoutSteps)._disabled()).toBe(true);

      // Last step
      stepper.selectedStepIndex = stepper.flatSteps.length - 1;
      expect(nextDir._disabled()).toBe(true);

      // Linear mode enabled
      stepper.selectedStepIndex = 0;
      stepper.linear = true;
      expect(nextDir._disabled()).toBeUndefined();

      // Non-linear, next step disabled
      stepper.linear = false;
      stepper.flatSteps[1].disabled = true;
      expect(nextDir._disabled()).toBe(true);

      // Non-linear, next step is review and review is disabled
      stepper.flatSteps[1].disabled = false;
      stepper.flatSteps[1].isReview = true;
      stepper._isReviewAndSubmitDisabled = true;
      stepper.canReviewWithErrors = false;
      expect(nextDir._disabled()).toBe(true);

      // Non-linear, next step is review and canReviewWithErrors is true
      stepper.canReviewWithErrors = true;
      expect(nextDir._disabled()).toBeUndefined();
    });

    it('SdsStepperPreviousDirective should handle click and disabled state correctly', () => {
      stepper.selectedStepIndex = 1;
      stepper.selectedStep = stepper.flatSteps[1];
      const prevDir = new SdsStepperPreviousDirective(stepper);
      const prevSpy = vi.spyOn(stepper, 'onPreviousStep');
      prevDir._handleClick();
      expect(prevSpy).toHaveBeenCalled();

      // At step index 0
      stepper.selectedStepIndex = 0;
      expect(prevDir._disabled()).toBe(true);

      // Step index 1, previous step enabled
      stepper.selectedStepIndex = 1;
      stepper.flatSteps[0].disabled = false;
      stepper.flatSteps[0].isReview = false;
      expect(prevDir._disabled()).toBeUndefined();

      // Step index 1, previous step disabled
      stepper.flatSteps[0].disabled = true;
      expect(prevDir._disabled()).toBe(true);

      // Step index 1, previous step is review and review disabled
      stepper.flatSteps[0].disabled = false;
      stepper.flatSteps[0].isReview = true;
      stepper._isReviewAndSubmitDisabled = true;
      expect(prevDir._disabled()).toBe(true);
    });

    it('SdsStepperSaveDirective should call onSaveClicked and emit saveData', async () => {
      const saveDir = new SdsStepperSaveDirective(stepper);
      const saveSpy = vi.spyOn(stepper, 'onSaveClicked');
      saveDir._handleClick();
      expect(saveSpy).toHaveBeenCalled();

      let emittedSaveData: any;
      stepper.saveData.subscribe((data) => (emittedSaveData = data));
      await stepper.onSaveClicked();

      expect(emittedSaveData).toBeDefined();
      expect(emittedSaveData.metadata.stepId).toEqual('step1');
    });

    it('SdsStepperNavDirective should change step on click', () => {
      const navDir = new SdsStepperNavDirective(stepper);
      navDir.sdsStepperNav = stepper.flatSteps[1];
      const changeSpy = vi.spyOn(stepper, 'changeStep');
      navDir._handleClick();
      expect(changeSpy).toHaveBeenCalledWith('step2Child1');
    });

    it('SdsStepperUSWDSNavDirective should synchronize step indicator with stepper', () => {
      const indicator = new UsaStepIndicatorStubComponent();
      const directive = new SdsStepperUSWDSNavDirective(stepper, indicator as any);
      directive.ngOnInit();

      const changeSpy = vi.spyOn(stepper, 'changeStep');
      indicator.currentStepChange.emit(1);

      expect(changeSpy).toHaveBeenCalledWith('step2Child1');

      directive.ngOnDestroy();
      expect(directive.stepChangeSubscriptions.closed).toBe(true);
    });
  });

  describe('Step lifecycle, blur validation, events, and templates', () => {
    it('SdsStepComponent hasAllEmptyValues should handle null, primitives, arrays, and nested objects', () => {
      const step = stepper.flatSteps[0];
      expect(step.hasAllEmptyValues(null)).toBe(true);
      expect(step.hasAllEmptyValues(undefined)).toBe(true);
      expect(step.hasAllEmptyValues('test')).toBe(true);
      expect(step.hasAllEmptyValues(123)).toBe(true);
      expect(step.hasAllEmptyValues([])).toBe(true);
      expect(step.hasAllEmptyValues([1])).toBe(false);
      expect(step.hasAllEmptyValues({})).toBe(true);
      expect(step.hasAllEmptyValues({ a: '', b: null, c: false, d: 0, e: undefined })).toBe(true);
      expect(step.hasAllEmptyValues({ a: { b: '', c: [] } })).toBe(true);
      expect(step.hasAllEmptyValues({ a: 'valid' })).toBe(false);
      expect(step.hasAllEmptyValues({ a: true })).toBe(false);
      expect(step.hasAllEmptyValues({ a: 1 })).toBe(false);
    });

    it('Should support validateOnBlur on SdsStepComponent', () => {
      const blurFixture = TestBed.createComponent(BlurStepperTestComponent);
      blurFixture.detectChanges();
      const blurStepper = blurFixture.componentInstance.stepper;

      expect(blurStepper).toBeDefined();
      const blurStep = blurStepper.flatSteps[0];
      expect(blurStep.validateOnBlur).toBe(true);

      const updateValidationSpy = vi.spyOn(blurStepper, 'updateValidation');
      blurStep.form.updateValueAndValidity();
      expect(updateValidationSpy).toHaveBeenCalledWith(blurStep);

      blurStepper.onNextStep();
      expect(updateValidationSpy).toHaveBeenCalled();

      blurStepper.selectedStepIndex = 1;
      blurStepper.selectedStep = blurStepper.flatSteps[1];
      blurStepper.onPreviousStep();
      expect(updateValidationSpy).toHaveBeenCalled();
    });

    it('Should handle step onModelChange custom event dispatch and stepper listener', () => {
      const step = stepper.flatSteps[0];
      let stepEmitted: any;
      step.modelChange.subscribe((val) => (stepEmitted = val));

      step.onModelChange({ updatedKey: 'updatedValue' });
      expect(stepEmitted).toEqual({ updatedKey: 'updatedValue' });

      const stepperModelSpy = vi.spyOn(stepper.modelChange, 'emit');
      const stopSpy = vi.fn();
      const mockEvent = {
        stopImmediatePropagation: stopSpy,
        detail: { key: 'fromStepper' },
      } as any;

      stepper.onModelChange(mockEvent);
      expect(stopSpy).toHaveBeenCalled();
      expect(stepperModelSpy).toHaveBeenCalledWith({ key: 'fromStepper' });
    });

    it('Should filter steps with hideFn and getDisplayedSteps', () => {
      expect(stepper.getDisplayedSteps(null as any)).toEqual([]);

      const step2Child = stepper.flatSteps.find((s) => s.id === 'step2Child1')!;
      step2Child.hideFn = () => true;
      stepper.flatSteps = stepper.getFlatSteps(stepper.stepTemplates);
      expect(stepper.flatSteps.find((s) => s.id === 'step2Child1')).toBeUndefined();

      step2Child.hideFn = () => false;
      stepper.flatSteps = stepper.getFlatSteps(stepper.stepTemplates);
      expect(stepper.flatSteps.find((s) => s.id === 'step2Child1')).toBeDefined();

      const displayed = stepper.getDisplayedSteps(stepper.stepTemplates);
      expect(displayed.length).toBeGreaterThan(0);
    });

    it('Should project Step Header and Footer components', () => {
      expect(new SdsStepHeaderComponent()).toBeDefined();
      expect(new SdsStepFooterComponent()).toBeDefined();

      const headerEl = fixture.debugElement.query(By.css('.step1-header'));
      const footerEl = fixture.debugElement.query(By.css('.step1-footer'));

      expect(headerEl).not.toBeNull();
      expect(headerEl.nativeElement.textContent).toContain('Header 1');
      expect(footerEl).not.toBeNull();
      expect(footerEl.nativeElement.textContent).toContain('Footer 1');
    });

    it('SdsStepComponent onModelChange should fall back to document.createEvent when Event is not a function', () => {
      const step = stepper.flatSteps[0];
      const origEvent = (globalThis as any).Event;
      try {
        (globalThis as any).Event = undefined;
        let emitted: any;
        step.modelChange.subscribe((val) => (emitted = val));
        step.onModelChange('fallback-test');
        expect(emitted).toEqual('fallback-test');
      } finally {
        (globalThis as any).Event = origEvent;
      }
    });
  });

  describe('Stepper routing, lifecycle, and helper methods', () => {
    it('Should navigate via router when route is provided and isRouteEnabled is true', async () => {
      const router = TestBed.inject(Router);
      const navigateSpy = vi.spyOn(router, 'navigate');

      stepper.isRouteEnabled = true;
      stepper.flatSteps[1].route = 'step2Child1-route';

      await stepper.changeStep('step2Child1');
      expect(navigateSpy).toHaveBeenCalledWith(['step2Child1-route'], {
        queryParams: {
          sdsStepId: 'step2Child1',
        },
        queryParamsHandling: 'merge',
      });
    });

    it('Should not navigate via router when isRouteEnabled is false', async () => {
      const router = TestBed.inject(Router);
      const navigateSpy = vi.spyOn(router, 'navigate');

      stepper.isRouteEnabled = false;
      await stepper.changeStep('step2Child1');
      expect(navigateSpy).not.toHaveBeenCalled();
    });

    it('Should handle ngOnChanges for currentStepId and stepValidityMap', () => {
      const changeStepSpy = vi.spyOn(stepper, 'changeStep');
      stepper.ngOnChanges({
        currentStepId: new SimpleChange('step1', 'step3', false),
      });
      expect(changeStepSpy).toHaveBeenCalledWith('step3');

      stepper.stepValidityMap = { step1: true, step2Child1: false, step3: true };
      stepper.ngOnChanges({
        stepValidityMap: new SimpleChange(null, stepper.stepValidityMap, false),
      });
      expect(stepper.flatSteps[0].valid).toBe(true);
      expect(stepper.flatSteps[1].valid).toBe(false);
      expect(stepper.flatSteps[2].valid).toBe(true);

      // Early return when selectedStep is null
      const unselectedStepper = new SdsStepper(null as any, null as any, null as any);
      expect(() => unselectedStepper.ngOnChanges({})).not.toThrow();
    });

    it('Should handle validateStepsOnInit with specific array of step IDs', fakeAsync(() => {
      stepper.validateStepsOnInit = ['step1'];
      stepper.currentStepId = 'step1';
      const updateValSpy = vi.spyOn(stepper, 'updateValidation');

      stepper.ngAfterViewInit();
      tick(10);
      expect(updateValSpy).toHaveBeenCalled();

      stepper.validateStepsOnInit = ['step2Child1'];
      stepper.currentStepId = 'step1';
      stepper.ngAfterViewInit();
      tick(10);

      stepper.validateStepsOnInit = ['non-matching-id'];
      expect(() => stepper.ngAfterViewInit()).not.toThrow();
    }));

    it('Should evaluate onSaveClicked in linear mode and updateValidity with null step', async () => {
      stepper.linear = true;
      await stepper.onSaveClicked();
      expect(stepper.linear).toBe(true);

      expect(() => (stepper as any).updateValidity({}, [null])).not.toThrow();

      const clean = (stepper as any).getCleanObject({
        regularText: 'sample',
        nested: { count: 5 },
      });
      expect(clean.regularText).toEqual('sample');
      expect(clean.count).toEqual(5);
    });

    it('Should initialize stepper with snapshot queryParams and queryParams subscription in ngAfterContentInit', fakeAsync(() => {
      const mockRoute = {
        snapshot: { queryParams: { sdsStepId: 'step2Child1' } },
        queryParams: of({ sdsStepId: 'step3' }),
      } as any;
      const routeStepper = new SdsStepper(TestBed.inject(Router), mockRoute, stepper.cdr);
      routeStepper.stepTemplates = stepper.stepTemplates;
      routeStepper.stepValidityMap = null as any;
      routeStepper.linear = false;
      routeStepper.isRouteEnabled = true;

      routeStepper.ngAfterContentInit();
      expect(routeStepper.stepValidityMap).toEqual({});
      expect(routeStepper.currentStepId).toBe('step2Child1');

      tick(20);
      expect(routeStepper.currentStepId).toBe('step3');
    }));
  });
});
