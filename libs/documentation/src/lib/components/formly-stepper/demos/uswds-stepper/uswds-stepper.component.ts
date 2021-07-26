import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-uswds-stepper',
  templateUrl: './uswds-stepper.component.html',
})
export class UswdsStepperComponent {


  stepOne: FormlyFieldConfig = {
    key: 'title',
    type: 'input',
    templateOptions: {
      label: 'Entity Name',
      placeholder: 'eg: Acme Corporation',
      description: 'Enter the name of your entity.',
      required: true,
    },
  };

  stepTwo: FormlyFieldConfig = {
    key: 'title2',
    type: 'input',
    templateOptions: {
      label: 'Entity Name 2',
      placeholder: 'eg: Acme Corporation',
      description: 'Enter the name of your entity.',
      required: true,
    },
  };

  stepThree: FormlyFieldConfig = {
    key: 'title3',
    type: 'input',
    templateOptions: {
      label: 'Entity Name 3',
      placeholder: 'eg: Acme Corporation',
      description: 'Enter the name of your entity.',
      required: true,
    },
  };
}
