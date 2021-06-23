import { Injectable } from "@angular/core";
import { SdsFormlyTypes } from "@gsa-sam/sam-formly";
import { FormlyFieldConfig } from "@ngx-formly/core";


@Injectable()
export class StepperBasicService {
  getReportDetails() {
    return {
      key: 'reportDetails',
      templateOptions: {
        placeholder: "Input Unique Entity ID",
      },
      fieldGroup: [
        {
          key: "report",
          fieldGroupClassName: "grid-row grid-gap-2",
          fieldGroup: [
            {
              className: "grid-col-8",
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
              className: "grid-col-4 margin-top-5",
              key: "year",
              type: "select",
              templateOptions: {
                hideLable: true,
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
        {
          template:
            "<h4 class='padding-top-1'>Place of Performance</h4>",
        },
        {
          className: "grid-col-8",
          type: "input",
          key: "cityName",
          templateOptions: {
            label: "City",
            hideOptional: true,
          },
        }
      ]
    };
  }

  getPaymentInfo(): FormlyFieldConfig {
    return {
      key: 'paymentInfo',
      fieldGroup: [
        {
          template: `<span class="text-error sds-small text-italic">
            *Due to techinical difficulties, we are currently only allowing payment through credit
            </span>`
        },
        {
          type: SdsFormlyTypes.READONLY,
          defaultValue: 'Credit',
          templateOptions: {
            label: 'Payment Type',
            hideOptional: true,
          },
        },
        {
          type: SdsFormlyTypes.INPUT,
          templateOptions: {
            label: 'Card Number',
            placeholder: '1234-5678-9012-3456',
            required: true,
            maxLength: 16,
          },
        },
        {
          type: SdsFormlyTypes.INPUT,
          templateOptions: {
            label: 'Security Code',
            placeholder: '123',
            required: true,
            maxLength: 4,
          },
        },
        {
          type: SdsFormlyTypes.INPUT,
          templateOptions: {
            label: 'Zip Code',
            placeholder: '12345',
            required: true,
            maxLength: 5
          },
        },
      ]
    }
  }

}