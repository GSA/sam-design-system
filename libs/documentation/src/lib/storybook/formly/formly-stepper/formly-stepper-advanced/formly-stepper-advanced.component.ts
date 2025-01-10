import { Component, ViewChild, viewChild } from '@angular/core';
import { FormlyUtilsService, SdsStepper } from '@gsa-sam/sam-formly';
import { StepperAdvancedService } from './stepper-advanced.service';
import { FormlyForm } from '@ngx-formly/core';
import { CustomStepperDemo } from './custom-stepper.component';

@Component({
  selector: `stepper-advanced-demo`,
  templateUrl: `./formly-stepper-advanced.component.html`,
  providers: [StepperAdvancedService, SdsStepper],
})
export class StepperAdvancedDemoComponent {
  @ViewChild(CustomStepperDemo, { static: true }) public customStepper: CustomStepperDemo;
  model = {
    validationForm: { age: '17', name: '', password: '', zipCode5: '12345' },
    //subawardee: [],
    // reportDetails: { report: { month: '03', year: '03' } },
    //"securityLevels": { "nameOfIndividualConsent": "Test" , "titleOfIndividualConsent": "test123" }
  };
  validateStepsOnInit = ['validateId'];
  showLoading = false;

  stepMap = {
    validationForm: {
      id: 'validateId',
      fieldConfig: this.stepperAdvancedService.getValidationForm(),
      // validationFn: this.validationFormValidateFn,
    },

    permission: {
      id: 'permissionId',
      fieldConfig: this.stepperAdvancedService.getPermission(),
    },
    registrationPurpose: {
      fieldConfig: this.stepperAdvancedService.getRegistrationPurpose(),
    },
    enitityInformation: {
      fieldConfig: this.stepperAdvancedService.getEntityInformation(),
    },
    reportDetails: {
      fieldConfig: this.stepperAdvancedService.getReportDetails(),
    },
    taxpayerInformation: {
      fieldConfig: this.stepperAdvancedService.getTaxpayerForm(),
    },
    subawardee: {
      validationFn: (model: any) => {
        return model.subawardee.length ? true : undefined;
      },
    },
    review: {
      fieldConfig: {
        fieldGroup: [
          this.stepperAdvancedService.getRegistrationPurpose(),
          this.stepperAdvancedService.getEntityInformation(),
          this.stepperAdvancedService.getReportDetails(),
          this.stepperAdvancedService.getTaxpayerForm(),
        ],
      },
      validationFn: () => true,
    },
  };

  currentStepId: string;
  stepValidityMap = {};

  linear = false;
  reinitializeComponents = false;
  constructor(private stepperAdvancedService: StepperAdvancedService) {}

  onBlurHandler(field: any, event: FocusEvent): void {
    this.customStepper.updateValidation(this.customStepper.selectedStep);
    console.log('Field blurred:', field.key);
    console.log('Event:', event);
  }

  onStepChange($event) {
    this.currentStepId = $event.id;

    if (this.currentStepId === 'review') {
      FormlyUtilsService.setReadonlyMode(true, this.stepMap.review.fieldConfig.fieldGroup as any);
    }
  }

  onSaveData(data: { model: any; metadata: any }) {
    console.log(data);
  }

  updateSubawardee($event) {
    //this.model.subawardee = $event;
  }

  toggleLinearMode() {
    this.linear = !this.linear;
  }

  handleSubmit(form: FormlyForm) {
    console.log(form);
  }
}
