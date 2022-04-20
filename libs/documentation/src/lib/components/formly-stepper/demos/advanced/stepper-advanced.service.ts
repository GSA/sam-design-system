import { Injectable } from "@angular/core";
import { SdsFormlyTypes } from "@gsa-sam/sam-formly";
import { FormlyFieldConfig } from "@ngx-formly/core";


@Injectable()
export class StepperAdvancedService {


  getPermission(): FormlyFieldConfig {
    return {
      key: 'permission',
      fieldGroupClassName: 'grid-row',
      fieldGroup: [
        {
          key: 'permission',
          //template: 'what'
          template: '<br /><h4><b>what permission</b></h4></br> Select the specfific'
        },
        {
          key: 'contractOpp',
          type: 'multicheckbox',
          className: 'desktop: grid-col-12 tablet: grid-col-12',
          templateOptions: {
            label: 'contract opp',
            group: 'panel',

            options: [
              {
                key: 'read-public',
                value: 'Read Public'
              },
              {
                key: 'sensitive',
                value: 'sensitive'
              },
              {
                key: 'write',
                value: 'write public'
              },
              {
                key: 'write-sens',
                value: 'w-sens'
              }

            ]
          }
        }
      ]
    }
  }

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
            minLength: 5,
            min: 0,
          },
        },
        {
          className: "grid-col-7",
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

  getSubawardeeForm() {
    return {
      key: 'subawardee',
      fieldGroup: [
        {
          templateOptions: { label: "Input Details" },
          fieldGroup: [
            {
              key: "globalDunsNumber",
              type: "input",
              templateOptions: {
                label: "Subawardee Number",
              },
            },
            {
              key: "globalName",
              type: "input",
              templateOptions: {
                label: "Subawardee Name",
              },
            },
            {
              key: "date",
              type: "datepicker",
              templateOptions: {
                label: "Subawardee Date",
                placeholder:
                  "eg: " +
                  new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  }),
              },
            },
            {
              key: "description",
              type: "textarea",
              templateOptions: {
                label:
                  "Description of the overall purpose and expected outcomes, OR results of the contract, including significant deliverables and, if appropriate, associated units of measure. (Optional)",
              },
            },
            {
              key: "subcontract",
              type: "radio",
              templateOptions: {
                label:
                  "As provided to you by your subcontractor, in your subcontractor's business or organization's preceding completed fiscal year, did its business or organization (the legal entity to which the DUNS number it provided belongs) receive (1) 80 percent or more of its annual gross revenues in U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements; and (2) $25,000,000 or more in annual gross revenues from U.S. federal contracts, subcontracts, loans, grants, subgrants, and/or cooperative agreements?*:",
                options: [
                  {
                    value: "yes",
                    label: "Yes",
                  },
                  {
                    value: "no",
                    label: "No",
                  },
                ],
              },
            },
          ],
        }]
    }
  }

  getReportDetails() {
    return {
      key: 'reportDetails',
      templateOptions: {
        placeholder: "Input Unique Entity ID",
      },
      fieldGroup: [
        {
          key: "report",
          fieldGroupClassName: "grid-row grid-gap-4",
          fieldGroup: [
            {
              className: "grid-col-5",
              key: "month",
              type: "select",
              templateOptions: {
                label: "Report Month",
                hideOptional: true,
                options: [
                  { label: "Jan", value: "01" },
                  { label: "Feb", value: "02" },
                  { label: "Mar", value: "03" },
                  { label: "Apr", value: "04" },
                ],
                required: true,
              },
            },
            {
              className: "grid-col-4",
              key: "year",
              type: "select",
              templateOptions: {
                label: 'Report Year',
                hideOptional: true,
                options: [
                  { label: "2001", value: "01" },
                  { label: "2002", value: "02" },
                  { label: "2003", value: "03" },
                  { label: "2004", value: "04" },
                ],
                required: true,
                showError: false,
              },
            },
          ],
        },

        {
          className: "desktop:grid-col-12 tablet:grid-col-12",
          type: "input",
          key: "title",

          templateOptions: {
            label: "Program or Project Title",
            required: true,
            showError: false,
          },
          modelOptions: {
            updateOn: 'blur'
          }
        },
      ]
    };
  }
}