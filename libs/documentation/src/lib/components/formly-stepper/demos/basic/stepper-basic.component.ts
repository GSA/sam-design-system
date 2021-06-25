import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { NavigationMode } from "@gsa-sam/components";
import { FormlyUtilsService } from "@gsa-sam/sam-formly";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { StepperBasicService } from "./stepper-basic.service";
import * as _ from 'lodash-es';
@Component({
  selector: `stepper-basic-demo`,
  templateUrl: './stepper-basic.component.html',
  providers: [
    StepperBasicService
  ]
})
export class StepperBasicDemoComponent {

  steps = [
    {
      id: 'step1',
      text: 'Entity Report',
      mode: NavigationMode.LABEL,
      children: [
        {
          id: 'step1Child1',
          text: 'Initial Step',
          stepValidationFn: (model) => true,
          mode: NavigationMode.INTERNAL,
        },
        {
          id: 'step1Child2',
          text: 'Report Details',
          fieldConfig: this.stepperBasicService.getReportDetails(),
          mode: NavigationMode.INTERNAL,
        }
      ]
    },
    {
      id: 'step2',
      text: 'Entity Address',
      fieldConfig: this.stepperBasicService.getAddressDetails(),
      mode: NavigationMode.INTERNAL,
    },
    {
      id: 'step3',
      text: 'Entity Information',
      fieldConfig: this.stepperBasicService.getEntityForm(),
      mode: NavigationMode.INTERNAL,
    },
    {
      id: 'review',
      text: 'Review and Submit',
      mode: NavigationMode.INTERNAL,
      fieldConfig: {
        fieldGroup: [
          this.stepperBasicService.getReportDetails(),
          this.stepperBasicService.getAddressDetails(),
          this.stepperBasicService.getEntityForm()
        ]
      }
    }
  ];

  model: any = {};
  currentStepId: string;
  stepValidityMap: any;
  isReview: boolean = false;
  constructor(
    private stepperBasicService: StepperBasicService,
  ) {}

  onStepChange($event) {
    this.currentStepId = $event.id;
    if (this.currentStepId === 'review') {
      FormlyUtilsService.setReadonlyMode(true, this.steps[3].fieldConfig.fieldGroup as any);
    }
  }

  onModelChange($event) {
    console.log('model change', $event);
  }
}