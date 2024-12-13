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
    validationForm: { age: '12', name: '', password: '1234567' },
    //subawardee: [],
    // reportDetails: { report: { month: '03', year: '03' } },
    //"securityLevels": { "nameOfIndividualConsent": "Test" , "titleOfIndividualConsent": "test123" }
  };
  validateStepsOnInit = ['businessoperations.security'];
  showLoading = false;

  stepMap = {
    security: {
      id: 'businessoperations.security',
      text: 'Security Levels',

      fieldConfig: {
        key: 'securityLevels',
        fieldGroup: [
          {
            className: 'grid-col-12 tablet:grid-col-5',
            key: 'nameOfIndividualConsent',
            type: 'input',
            props: {
              label: 'Name of Individual Executing Consent',
              placeholder: 'John Smith',
              required: true,
              blur: (field, event) => {
                field.formControl.markAsTouched(); // Mark field as touched on blur
                field.options.showError = (f) => f.formControl.invalid && f.formControl.touched; // Show errors
              },
            },
          },

          {
            key: 'titleOfIndividualConsent',

            type: 'input',

            className: 'grid-col-12 tablet:grid-col-5',

            props: {
              label: 'Title of Individual Executing Consent',

              required: true,

              placeholder: 'CEO',
              blur: (field, event) => {
                field.formControl.markAsTouched(); // Mark field as touched on blur
                field.options.showError = (f) => f.formControl.invalid && f.formControl.touched; // Show errors
                this.onBlurHandler(field, event);
              },
            },

            validators: {
              invalidTitle: {
                expression: (c) => c.value && c.value.length <= 6,

                message: 'Invalid Title',
              },
            },
          },

          {
            key: 'entitySecurityLevel',
            type: 'radio',
            className: 'grid-col-12',
            props: {
              label: 'Entity Security Level',
              labelClass: 'grid-row margin-bottom-1',
              required: true,
              options: [
                { value: '00', label: 'Not applicable' },
                { value: '90', label: 'Government non-classified' },
                { value: '92', label: 'Government confidential' },
                { value: '93', label: 'Government secret' },
                { value: '94', label: 'Government top secret' },
              ],
            },
          },
          {
            key: 'highestEmployeeSecurityLevel',
            type: 'radio',
            className: 'grid-col-12',
            props: {
              label: 'Highest Employee Security Level',
              labelClass: 'grid-row margin-bottom-1 margin-top-2',
              required: true,
              options: [
                { value: '00', label: 'Not applicable' },
                { value: '90', label: 'Government non-classified' },
                { value: '92', label: 'Government confidential' },
                { value: '93', label: 'Government secret' },
                { value: '94', label: 'Government top secret' },
              ],
            },
          },
        ],
      },
      validationFn: undefined,
    },
    validationForm: {
      fieldConfig: this.stepperAdvancedService.getValidationForm(),
    },
    welcome: {
      validationFn: () => true,
    },
    permission: {
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
