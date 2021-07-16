import { Component, OnInit } from "@angular/core";
import { FormlyUtilsService, SdsStepper } from "@gsa-sam/sam-formly";
import { Observable } from "rxjs";
import { StepperAdvancedService } from "./stepper-advanced.service";

@Component({
  selector: `stepper-advanced-demo`,
  templateUrl: `./stepper-advanced.component.html`,
  providers: [
    StepperAdvancedService,
    SdsStepper
  ]
})
export class StepperAdvancedDemoComponent implements OnInit {
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

  constructor(
    private stepperAdvancedService: StepperAdvancedService
  ) {}

  ngOnInit() {
    const sessionData = sessionStorage.getItem('dataEntry');
    if (!sessionData) {
      return;
    }

    const parsedModel = JSON.parse(sessionData);
    this.model = parsedModel.model;
    this.stepValidityMap = parsedModel.metadata.stepValidityMap;
  }

  onStepChange($event) {
    this.currentStepId = $event.id;

    if (this.currentStepId === 'review') {
      FormlyUtilsService.setReadonlyMode(true, this.stepMap.review.fieldConfig.fieldGroup as any);
    }
  }

  onSaveData(data: {model: any, metadata: any}) {
    console.log(data);
    const jsonString = JSON.stringify(data);
    sessionStorage.setItem('dataEntry', jsonString);
  }

  updateSubawardee($event) {
    this.model.subawardee = $event;
  }
}