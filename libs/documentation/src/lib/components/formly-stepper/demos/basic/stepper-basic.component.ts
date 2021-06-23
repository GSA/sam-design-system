import { Component, OnInit } from "@angular/core";
import { NavigationMode } from "@gsa-sam/components";
import { StepperBasicService } from "./stepper-basic.service";

@Component({
  selector: `stepper-basic-demo`,
  templateUrl: './stepper-basic.component.html',
  providers: [
    StepperBasicService
  ]
})
export class StepperBasicDemoComponent implements OnInit {
  steps = [
    {
      id: 'step1',
      text: 'Step 1',
      mode: NavigationMode.LABEL,
      children: [
        {
          id: 'step1Child1',
          text: 'Step 1 Child 1',
          fieldConfig: this.stepperBasicService.getReportDetails(),
          mode: NavigationMode.INTERNAL,
        }
      ]
    },
    {
      id: 'step2',
      text: 'Step 2',
      fieldConfig: this.stepperBasicService.getPaymentInfo(),
      mode: NavigationMode.INTERNAL,
    }
  ];

  model: any = {};
  currentStepId: string;
  stepValidityMap: any;

  constructor(
    private stepperBasicService: StepperBasicService,
  ) {}

  ngOnInit() {

    const savedDraft: string = sessionStorage.getItem('dataEntry');
    if (!savedDraft) {
      return;
    }

    this.getFormDataFromDraft(savedDraft);
  }

  onSaveClicked($event: { model: any, metadata: any }) {
    console.log($event, 'moe');
    sessionStorage.setItem('dataEntry', JSON.stringify($event));
  }

  onStepChange($event) {
    this.currentStepId = $event.id;
  }

  getFormDataFromDraft(savedDraft: string) {
    const savedDraftModel = JSON.parse(savedDraft);

    this.model = savedDraftModel.model || {};
    this.currentStepId = savedDraftModel?.metadata?.stepId;
    this.stepValidityMap = savedDraftModel?.metadata?.stepValidityMap;
  }

}