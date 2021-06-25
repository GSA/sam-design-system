import { Injectable } from "@angular/core";
import { SdsFormlyTypes } from "@gsa-sam/sam-formly";
import { FormlyFieldConfig } from "@ngx-formly/core";


@Injectable()
export class StepperAdvancedService {

  getRegistrationPurpose(): FormlyFieldConfig {
    return {
      key: 'purposeOfRegistration',
      fieldGroup: [
        {
          key: 'typeOfEntity',
          type: SdsFormlyTypes.RADIO,
          templateOptions: {
            label: 'What type of entity are you registering?',
            hideOptions: true,
            options: [
              {
                label: 'Business Or Organization',
                value: 'business'
              },
              {
                label: 'U.S. State Government',
                value: 'stateGovt'
              },
              {
                label: 'U.S. Local Government',
                value: 'localGovt'
              },
              {
                label: 'Tribal Government',
                value: 'tribal'
              },
              {
                label: 'Foreign Government',
                value: 'foreign'
              }
            ]
          }
        },
        {
          key: 'purposeOfRegistration',
          type: SdsFormlyTypes.RADIO,
          templateOptions: {
            hideOptions: true,
            label: 'Why are you registering this entity to do business with the U.S. government?',
            options: [
              {
                label: `I want to be able to bid on federal contracts or other procurement opportunities. 
                        I also want to be able to apply for financial assistance programs`,
                value: 'bidContracts'
              },
              {
                label: 'I want to apply for federal assistance opportunities like grants, loans, and other financial assistance programs',
                value: 'assistanceOpportunities'
              }
            ]
          }
        }
      ]
    }
  }

  getEntityInformation(): FormlyFieldConfig {
    return {
      key: 'entityInformation',
      fieldGroupClassName: 'grid-row grid-gap-4',
      fieldGroup: [
        {
          key: 'legalBusinessName',
          type: SdsFormlyTypes.INPUT,
          templateOptions: {
            hideOptions: true,
            label: 'Legal Business Name',
            description: `If you are acting on behalf of a limited partnershil, LLC, or corporation,
                          your legal business name is the name you registered with your state filing office.`
            
          }
        },
        {
          template: `
            <span class="display-block text-bold margin-top-2">Physical Address</span>
            <span>
              Your physical address is the street address of the primary office or other building where
              your entity is located. A post office box may not be used as your physical address.
            </span>
          `
        },
        {
          className: "grid-col-7",
          key: "country",
          type: "select",
          templateOptions: {
            label: "Country",
            hideOptional: true,
            options: [
              { label: "United States (USA)", value: "united_states" },
              { label: "Canada", value: "canada" },
            ],
          },
        },
        {
          className: "grid-col-7",
          key: "streetAddress",
          type: "input",
          templateOptions: {
            label: "Street Address",
            hideOptional: true,
          },
        },
        {
          className: "grid-col-4",
          type: "input",
          key: "zip",

          templateOptions: {
            hideOptional: true,
            type: "number",
            label: "Zip",
            maxLength: 5,
            min: 0,
            pattern: "\\d{5}",
          },
        },
        {
          className: "grid-col-8",
          type: "input",
          key: "cityName",
          templateOptions: {
            label: "City",
            hideOptional: true,
          },
        },
        {
          className: "grid-col-4",
          key: "state",
          type: "select",
          hideExpression: (model) => model.country === "canada",
          templateOptions: {
            label: "State",
            hideOptional: true,
            options: [
              { id: "0", label: "--Select--", value: "Select" },
              { id: "1", label: "Alabama", value: "Alabama" },
              { id: "2", label: "Alaska", value: "Alaska" },
              { id: "3", label: "Arizona", value: "Arizona" },
              { id: "4", label: "Arkansas", value: "Arkansas" },
              { id: "5", label: "California", value: "California" },
              { id: "6", label: "Colorado", value: "Colorado" },
              { id: "7", label: "Connecticut", value: "Connecticut" },
              { id: "8", label: "Delaware", value: "Delaware" },
            ],
          },
        },
      ]
    }
  }

  getTaxpayerForm(): FormlyFieldConfig {
    return {
      key: 'taxpayerDetails',
      fieldGroup: [
        {
          template: `
            <span>
              Please refer to your taxpayer documnets from IRS to find your taxpayer information
            </span>
          `
        },
        {
          type: "input",
          key: "taxpayerName",
          templateOptions: {
            label: "Taxpayer Name",
            hideOptional: true,
          },
        },
        {
          type: "input",
          key: "tinNumber",
          templateOptions: {
            label: "TIN Number",
            hideOptional: true,
          },
        }
      ]
    }
  }
}