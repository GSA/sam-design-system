import { Component } from "@angular/core";
import { FormlyUtilsService, SdsStepper } from "@gsa-sam/sam-formly";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { StepperAdvancedService } from "./stepper-advanced.service";

@Component({
  selector: `stepper-advanced-demo`,
  templateUrl: `./stepper-advanced.component.html`,
  providers: [
    StepperAdvancedService,
    SdsStepper
  ]
})
export class StepperAdvancedDemoComponent {

  model = {
    subawardee: []
  };

  showLoading = false;

  stepMap = {
    welcome: {
      validationFn: () => true,
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
      validationFn: this.asyncValidationFn, // Passed in as input in html
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
        ]
      },
      validationFn: () => true,
    }
  }

  currentStepId: string;
  stepValidityMap = {};

  linear = false;
  reinitializeComponents = false;
  constructor(
    private stepperAdvancedService: StepperAdvancedService,
  ) {}

  asyncValidationFn(model: any, field: FormlyFieldConfig): Observable<boolean> {
    // No Value was entered - undefined response means that the step will remain untouched
    if (!model.taxpayerDetails || (!model.taxpayerDetails.taxpayerName && !model.taxpayerDetails.tinNumber)) {
      return of(undefined);
    }

    // Either name or tin number was not entered - invalidate field
    if (!model.taxpayerDetails.taxpayerName || !model.taxpayerDetails.tinNumber) {
      return of(false);
    }

    /**
     * Dummy example here - this mocks a http call that responds with value of {testHttpResponse: 'true'},
     * and then pipes the response to a function that checks whether the response's testHttpResponse value
     * is true. If so, the overall observable resolves to true, false otherwise
     * */
    return of({testHttpResponse: 'true'}).pipe(map(response => response.testHttpResponse === 'true'));
  }

  onStepChange($event) {
    this.currentStepId = $event.id;

    if (this.currentStepId === 'review') {
      FormlyUtilsService.setReadonlyMode(true, this.stepMap.review.fieldConfig.fieldGroup as any);
    }
  }

  onSaveData(data: {model: any, metadata: any}) {
    console.log(data);
  }

  updateSubawardee($event) {
    this.model.subawardee = $event;
  }

  toggleLinearMode() {
    this.linear = !this.linear;
    this.reinitializeComponents = true;
    this.model = {
      subawardee: []
    };
    this.stepValidityMap = {};

    setTimeout(() => {
      this.reinitializeComponents = false;
    }, 200)
  }
}