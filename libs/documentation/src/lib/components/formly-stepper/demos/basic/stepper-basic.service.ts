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

  getEntityForm(): FormlyFieldConfig {
    return {
      key: 'entityInfo',
      templateOptions: {
        group: 'panel',
      },
      fieldGroup: [
        {
          key: 'entity.type',
          type: 'select',
          templateOptions: {
            label: 'Entity Type',
            description: 'Select the entity type.',
            required: true,
            options: [
              { label: 'Contract Opportunities', value: 'co' },
              { label: 'Entity Information', value: 'ei' },
              { label: 'Assistance Listings', value: 'al' },
              { label: 'Contract Data', value: 'cd' },
              { label: 'Federal Hierarchy', value: 'fh' },
              { label: 'Wage Determination', value: 'wd' },
            ],
          },
        },
        {
          key: 'multiple.default.entity.title',
          type: 'input',
          templateOptions: {
            label: 'Entity Name',
            placeholder: 'eg: Acme Corporation',
            description: 'Enter the name of your entity.',
            required: true,
          },
        },
      ],
    };
  }

  getAddressDetails(): FormlyFieldConfig {
    return {
      key: 'entityAddress',
      fieldGroup: [
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
              {
                id: "9",
                label: "District of Columbia",
                value: "District of Columbie",
              },
              { id: "10", label: "Florida", value: "Florida" },
              { id: "11", label: "Georgia", value: "Georgia" },
              { id: "12", label: "Hawaii", value: "Hawaii" },
              { id: "13", label: "Idaho", value: "Idaho" },
              { id: "14", label: "Illinois", value: "Illinois" },
              { id: "15", label: "Indiana", value: "Indiana" },
              { id: "16", label: "Iowa", value: "Iowa" },
              { id: "17", label: "Kansas", value: "Kansas" },
              { id: "18", label: "Kentucky", value: "Kentucky" },
              { id: "19", label: "Louisiana", value: "Louisiana" },
              { id: "20", label: "Maine", value: "Maine" },
              { id: "21", label: "Maryland", value: "Maryland" },
              {
                id: "22",
                label: "Massachusetts",
                value: "Massachusetts",
              },
              { id: "23", label: "Michigan", value: "Michigan" },
              { id: "24", label: "Minnesota", value: "Minnesota" },
              { id: "25", label: "Mississippi", value: "Mississippi" },
              { id: "26", label: "Missouri", value: "Missouri" },
              { id: "27", label: "Montana", value: "Montana" },
              { id: "28", label: "Nebraska", value: "Nebraska" },
              { id: "29", label: "Nevada", value: "Nevada" },
              {
                id: "30",
                label: "New Hampshire",
                value: "New Hampshire",
              },
              { id: "31", label: "New Jersey", value: "New Jersey" },
              { id: "32", label: "New Mexico", value: "New Mexico" },
              { id: "33", label: "New York", value: "New York" },
              {
                id: "34",
                label: "North Carolina",
                value: "North Carolina",
              },
              {
                id: "35",
                label: "North Dakota",
                value: "North Dakota",
              },
              { id: "36", label: "Ohio", value: "Ohio" },
              { id: "37", label: "Oklahoma", value: "Oklahoma" },
              { id: "38", label: "Oregon", value: "Oregon" },
              {
                id: "39",
                label: "Pennsylvania",
                value: "Pennsylvania",
              },
              {
                id: "40",
                label: "Rhode Island",
                value: "Rhode Island",
              },
              {
                id: "41",
                label: "South Carolina",
                value: "South Carolina",
              },
              {
                id: "42",
                label: "South Dakota",
                value: "South Dakota",
              },
              { id: "43", label: "Tennessee", value: "Tennessee" },
              { id: "44", label: "Texas", value: "Texas" },
              { id: "45", label: "Utah", value: "Utah" },
              { id: "46", label: "Vermont", value: "Vermont" },
              { id: "47", label: "Virginia", value: "Virginia" },
              { id: "48", label: "Washington", value: "Washington" },
              {
                id: "49",
                label: "West Virginia",
                value: "West Virginia",
              },
              { id: "50", label: "Wisconsin", value: "Wisconsin" },
              { id: "51", label: "Wyoming", value: "Wyoming" },
            ],
          },
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
          className: "grid-col-4",
          type: "input",
          key: "congressional_district",
          hideExpression: (model) => model.country === "canada",
          templateOptions: {
            label: "Congressional District",
            hideOptional: true,
          },
        }]
    }
  };
}