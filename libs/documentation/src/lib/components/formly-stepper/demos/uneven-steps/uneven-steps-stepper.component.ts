import { Component } from '@angular/core';
import { SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gsa-sam-uswds-stepper',
  templateUrl: './uneven-steps-stepper.component.html',
})
export class UnevenStepsStepperComponent {
  stepOne: FormlyFieldConfig = {
    key: 'entityOne',
    fieldGroup: [
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'Entity Name',
          placeholder: 'eg: Acme Corporation',
          description: 'Enter the name of your entity.',
          required: true,
        },
        modelOptions: {
          updateOn: 'blur',
        },
      },
      {
        className: 'desktop:grid-col-12 tablet:grid-col-12',
        type: 'input',
        key: 'title',

        props: {
          label: 'Program or Project Title',
          required: true,
          showError: false,
        },
      },
    ],
    props: {
      completedValue: 75,
    },
  };
  stepOneSubstepOne: FormlyFieldConfig = {
    key: 'entityOneSubstepOne',
    fieldGroup: [
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'Entity Name - Substep One',
          placeholder: 'eg: Acme Corporation',
          description: 'Enter the name of your entity.',
          required: true,
        },
        modelOptions: {
          updateOn: 'blur',
        },
      },
      {
        className: 'desktop:grid-col-12 tablet:grid-col-12',
        type: 'input',
        key: 'title',

        props: {
          label: 'Program or Project Title',
          required: true,
          showError: false,
        },
      },
    ],
    props: {
      completedValue: 85,
    },
  };
  stepOneSubstepTwo: FormlyFieldConfig = {
    key: 'entityOneSubstepTwo',
    fieldGroup: [
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'Entity Name - Substep Two',
          placeholder: 'eg: Acme Corporation',
          description: 'Enter the name of your entity.',
          required: true,
        },
        modelOptions: {
          updateOn: 'blur',
        },
      },
      {
        className: 'desktop:grid-col-12 tablet:grid-col-12',
        type: 'input',
        key: 'title',

        props: {
          label: 'Program or Project Title',
          required: true,
          showError: false,
        },
      },
    ],
    props: {
      completedValue: 100,
    },
  };

  stepTwo = {
    key: 'purposeOfRegistration',
    fieldGroup: [
      {
        key: 'typeOfEntity',
        type: SdsFormlyTypes.RADIO,
        props: {
          label: 'What type of entity are you registering?',
          hideOptions: true,
          options: [
            {
              label: 'Business Or Organization',
              value: 'business',
            },
            {
              label: 'U.S. State Government',
              value: 'stateGovt',
            },
            {
              label: 'U.S. Local Government',
              value: 'localGovt',
            },
            {
              label: 'Tribal Government',
              value: 'tribal',
            },
            {
              label: 'Foreign Government',
              value: 'foreign',
            },
          ],
        },
      },
      {
        key: 'purposeOfRegistration',
        type: SdsFormlyTypes.RADIO,
        props: {
          hideOptions: true,
          label: 'Why are you registering this entity to do business with the U.S. government?',
          options: [
            {
              label: `Bid on federal contracts or other procurement opportunities.`,
              value: 'bidContracts',
            },
            {
              label: 'Apply for federal assistance opportunities.',
              value: 'assistanceOpportunities',
            },
          ],
        },
      },
    ],
  };

  stepThree = {
    key: 'taxpayerDetails',
    fieldGroup: [
      {
        template: `
          <span>
            Please refer to your taxpayer documnets from IRS to find your taxpayer information
          </span>
        `,
      },
      {
        type: 'input',
        key: 'taxpayerName',
        props: {
          label: 'Taxpayer Name',
          hideOptional: true,
        },
      },
      {
        type: 'input',
        key: 'tinNumber',
        props: {
          label: 'TIN Number',
          hideOptional: true,
        },
      },
    ],
  };

  model = {};
  stepValidityMap = {};

  onSaveData($event) {
    console.log($event);
  }
}
