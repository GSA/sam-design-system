import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-uswds-stepper',
  templateUrl: './uswds-stepper.component.html',
})
export class UswdsStepperComponent {


  stepOne: FormlyFieldConfig = {
    key: 'eitityOne',
    fieldGroup: [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Entity Name',
          placeholder: 'eg: Acme Corporation',
          description: 'Enter the name of your entity.',
          required: true,
        },
        modelOptions: {
          updateOn: 'blur'
        }
      },
      {
          className: "desktop:grid-col-12 tablet:grid-col-12",
          type: "input",
          key: "title",

          templateOptions: {
            label: "Program or Project Title",
            required: true,
            showError: false,
          }
      },
    ]
  };

  stepTwo =  {
    key: 'stepTwo',
    type: 'input',
    templateOptions: {
      label: 'Entity Name 2',
      placeholder: 'eg: Acme Corporation',
      description: 'Enter the name of your entity.',
      required: true,
    }
  }

  stepThree =  {
    key: 'stepThree',
    type: 'input',
    templateOptions: {
      label: 'Entity Name 3',
      placeholder: 'eg: Acme Corporation',
      description: 'Enter the name of your entity.',
      required: true,
    }
  }

  model = {};
  stepValidityMap = {};

  onSaveData($event) {
    console.log($event);
  }
}
