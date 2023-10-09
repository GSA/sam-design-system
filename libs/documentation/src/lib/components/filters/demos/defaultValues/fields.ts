export const filterFields = [
  {
    key: 'simpleSearch',
    type: 'input',
    props: {
      label: 'Keyword Search',
      description:
        'For more information on how to use our keyword search, visit our <a class="usa-link" aria-label="www.fsd.gov - opens in a new window" href="https://www.fsd.gov/gsafsd_sp?id=kb_article_view&sysparm_article=KB0045403" target="_blank"> help guide <span class="margin-left-1px usa-link--external font-body-md"></span></a>',
      hideOptional: true,
    },
    fieldArray: {
      fieldGroup: [
        {
          props: { tabHeader: 'Simple Search' },
          fieldGroup: [
            {
              key: 'keywordRadio',
              type: 'radio',
              defaultValue: 'ALL',
              props: {
                options: [
                  {
                    label: 'Any Words',
                    value: 'ANY',
                    tooltipText: 'Search results will contain one, some, or all keywords entered.',
                  },
                  {
                    label: 'All Words',
                    value: 'ALL',
                    tooltipText: 'Search results will contain all keywords entered.',
                  },
                  {
                    label: 'Exact Phrase',
                    value: 'EXACT',
                    tooltipText: 'Search results will contain the EXACT PHRASE from the keyword search.',
                  },
                ],
              },
            },
            {
              key: 'keywordTags',
              type: 'input',
              props: {
                configuration: {
                  id: 'keyword',
                  primaryKeyField: 'key',
                  primaryTextField: 'value',
                  labelText: 'Search Keyword',
                  selectionMode: 1,
                  autocompletePlaceHolderText: 'Placeholder text',
                  isTagModeEnabled: true,
                },
              },
            },
          ],
        },
        {
          props: { tabHeader: 'Search Editor', submitButtonId: 'booleanSearchSubmit' },
          modelOptions: { updateOn: 'submit' },
          fieldGroup: [
            {
              key: 'keywordEditorTextarea',
              type: 'textarea',
              defaultValue: '',
              className: 'display-block padding-left-2 padding-right-2',
              props: {
                placeholder: 'e.g. ((rental AND property) OR (lease and property) AND NOT ( "short term"))',
                required: true,
                attributes: { 'aria-label': 'Search Editor' },
              },
            },
            {
              type: 'button',
              id: 'booleanSearchSubmit',
              className: 'usa-button margin-right-2 margin-left-2 margin-top-1',
              props: { text: 'Search', type: 'submit' },
            },
          ],
        },
      ],
    },
  },
  {
    key: 'purchaser',
    props: { label: 'Purchaser', group: 'accordion' },
    fieldGroup: [
      {
        key: 'agencyPicker',
        type: 'input',
        props: {
          label: 'Federal Organizations',
          hideOptional: true,
          selectionType: 'checkbox',
          countFieldLevel: 2,
          inactiveToggle: false,
          model: {},
          simpleResponse: true,
        },
      },
      { key: 'idvWebsite', hide: true, type: 'input', props: { label: 'IDV Website', hideOptional: true } },
      {
        key: 'whoCanUse',
        hide: true,
        type: 'select',
        props: {
          label: 'Who Can Use',
          hideOptional: true,
          options: [
            {
              label: 'Only My Agency -  Only the Agency awarding the contract may place orders',
              value: 'Only My Agency',
            },
            {
              label: 'All Agencies - All Federal Government agencies may place orders against the contract',
              value: 'All Agencies',
            },
            {
              label: 'Defense - Only Department of Defense agencies may place orders against the contract',
              value: 'Defense',
            },
            { label: 'Civilian - Only civilian agencies may place orders against the contract', value: 'Civilian' },
            { label: 'Codes - Only the agencies codes listed in a comma-separated list.', value: 'Codes' },
            { label: 'Other', value: 'Other' },
          ],
        },
      },
      {
        key: 'lastDateToOrder',
        hide: true,
        group: 'panel',
        props: { label: 'Last Date to Order' },
        fieldGroup: [
          {
            key: 'lastDateToOrderSelect',
            type: 'select',
            props: {
              hideOptional: true,
              placeholder: 'Anytime',
              options: [
                { label: 'Next day', value: 'next24' },
                { label: 'Next 2 days', value: 'next2days' },
                { label: 'Next 3 days', value: 'next3days' },
                { label: 'Next week', value: 'nextWeek' },
                { label: 'Next month', value: 'nextMonth' },
                { label: 'Next 3 months', value: 'next3Months' },
                { label: 'Next year', value: 'nextYear' },
                { label: 'Custom date', value: 'customDate' },
              ],
              label: 'Last Date to Order',
            },
          },
          {
            key: 'lastDateToOrderFrom',
            type: 'datepicker',
            props: { hideOptional: true, label: 'From' },
            modelOptions: { updateOn: 'blur' },
            autoClear: true,
          },
          {
            key: 'lastDateToOrderTo',
            type: 'datepicker',
            props: { hideOptional: true, label: 'To' },
            modelOptions: { updateOn: 'blur' },
            autoClear: true,
          },
        ],
      },
      {
        key: 'feeForUseOfService',
        hide: true,
        type: 'select',
        props: {
          label: 'Fee for Use of Service',
          hideOptional: true,
          options: [
            { label: 'FIX - Fixed', value: 'FIX' },
            { label: 'RVA - Range Varies by Amount', value: 'RVA' },
            { label: 'RVO - Range Varies by Other Factor', value: 'RVO' },
            { label: 'NO - No Fee', value: 'NO' },
          ],
        },
      },
      {
        key: 'fips95CodesOtherText',
        hide: true,
        type: 'input',
        props: { label: 'FIPS 95 Codes / Other Text', hideOptional: true },
      },
      {
        key: 'primaryPointOfContact',
        hide: true,
        type: 'input',
        props: { label: 'Primary Point of Contact', hideOptional: true },
        max: 80,
      },
      {
        key: 'individualOrderCallLimit',
        group: 'panel',
        hide: false,
        props: { label: 'Individual Order / Call Limit' },
        fieldGroup: [
          {
            key: 'individualOrderCallLimitSelect',
            type: 'select',
            group: 'panel',
            props: {
              label: 'Individual Order / Call Limit',
              placeholder: 'Any amount',
              hideOptional: true,
              options: [
                { label: 'Under $1M', value: 'under1' },
                { label: '$1M - $25M', value: '1to25' },
                { label: '$25M - $100M', value: '25to100' },
                { label: '$100M - $500M', value: '100to500' },
                { label: '$500M and above', value: '500above' },
                { label: 'Specify Range', value: 'range' },
              ],
            },
          },
          {
            key: 'individualOrderCallLimitMin',
            type: 'input',
            modelOptions: { debounce: { default: 2000 } },
            props: { label: 'Min', hideOptional: true },
          },
          {
            key: 'individualOrderCallLimitMax',
            type: 'input',
            modelOptions: { debounce: { default: 2000 } },
            props: { label: 'Max', required: false, hideOptional: true },
          },
        ],
      },
    ],
  },
  {
    key: 'financialFunding',
    props: { label: 'Financial/Funding', group: 'accordion' },
    fieldGroup: [
      {
        key: 'financialFederalOrganizations',
        type: 'input',
        props: {
          label: 'Federal Organizations',
          hideOptional: true,
          selectionType: 'checkbox',
          countFieldLevel: 2,
          inactiveToggle: false,
          model: {},
          simpleResponse: true,
        },
      },
      {
        key: 'actionObligations',
        group: 'panel',
        hide: false,
        props: { label: 'Action Obligations' },
        fieldGroup: [
          {
            key: 'actionObligationsSelect',
            type: 'select',
            group: 'panel',
            props: {
              label: 'Action Obligations',
              placeholder: 'Any amount',
              hideOptional: true,
              options: [
                { label: 'Under $1M', value: 'under1' },
                { label: '$1M - $25M', value: '1to25' },
                { label: '$25M - $100M', value: '25to100' },
                { label: '$100M - $500M', value: '100to500' },
                { label: '$500M and above', value: '500above' },
                { label: 'Specify Range', value: 'range' },
              ],
            },
          },
          {
            key: 'actionObligationsMin',
            type: 'input',
            modelOptions: { debounce: { default: 2000 } },
            props: { label: 'Min', hideOptional: true },
          },
          {
            key: 'actionObligationsMax',
            type: 'input',
            modelOptions: { debounce: { default: 2000 } },
            props: { label: 'Max', required: false, hideOptional: true },
          },
        ],
      },
      {
        key: 'baseAndAllOptionsValue',
        hide: true,
        type: 'input',
        props: { label: 'Base and All Options Value', hideOptional: true },
      },
      {
        key: 'totalEstimatedOrderValue',
        hide: true,
        type: 'input',
        props: { label: 'Total Estimated Order Value', hideOptional: true },
      },
      {
        key: 'costOrPricingData',
        hide: true,
        type: 'select',
        props: {
          label: 'Cost Or Pricing Data',
          hideOptional: true,
          options: [
            { label: 'No', value: 'N' },
            { label: 'Not Obtained - Waived', value: 'W' },
            { label: 'Yes', value: 'Y' },
          ],
        },
      },
      {
        key: 'purchaseCardUsedAsPaymentMethod',
        hide: true,
        type: 'select',
        props: {
          label: 'Purchase Card Used As Payment Method',
          hideOptional: true,
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
        },
      },
      {
        key: 'contractFinancing',
        hide: true,
        type: 'select',
        props: {
          label: 'Contract Financing',
          hideOptional: true,
          options: [
            { label: 'Commercial Financial', value: 'E' },
            { label: 'FAR 52.232-16 Progress Payments', value: 'A' },
            { label: 'Not Applicable', value: 'Z' },
            { label: 'Percentage of Completion Progress Payments', value: 'C' },
            { label: 'Performance-Based Financing', value: 'F' },
            { label: 'Unusual Progress Payments or Advance Payments', value: 'D' },
          ],
        },
      },
      {
        key: 'costAccountingStandardsClause',
        hide: true,
        type: 'select',
        props: {
          label: 'Cost Accounting Standards Clause',
          hideOptional: true,
          options: [
            { label: 'Yes - CAS clause included', value: 'Y' },
            { label: 'No - CAS waiver approved', value: 'N' },
            { label: 'Not Applicable exempt from CAS', value: 'X' },
          ],
        },
      },
      {
        key: 'foreignFunding',
        hide: true,
        type: 'select',
        props: {
          label: 'Foreign Funding',
          hideOptional: true,
          options: [
            { label: 'Foreign Funds Foreign Military Sales', value: 'Foreign Funds Foreign Military Sales' },
            { label: 'Foreign Funds non-Foreign Military Sales', value: 'Foreign non-Funds Foreign Military Sales' },
            { label: 'Not Applicable', value: 'Not Applicable' },
          ],
        },
      },
    ],
  },
  {
    key: 'awardee',
    props: { label: 'Awardee', group: 'accordion' },
    fieldGroup: [
      {
        key: 'awardeeIdentification',
        props: { label: 'legal Awardee' },
        fieldGroup: [
          {
            key: 'legalBusinessName',
            hide: false,
            type: 'input',
            props: { label: 'Legal Business Name', hideOptional: true },
          },
          {
            key: 'doingBusinessAsName',
            hide: false,
            type: 'input',
            props: { label: 'Doing Business As Name', hideOptional: true },
          },
        ],
      },
      {
        key: 'ultimateParent',
        props: { label: 'Ultimate Awardee' },
        fieldGroup: [
          {
            key: 'legalBusinessName1',
            hide: false,
            type: 'input',
            props: { label: 'Legal Business Name', hideOptional: true },
          },
        ],
      },
      {
        key: 'awardeeBusinessCategory',
        props: { label: 'Business Awardee' },
        fieldGroup: [
          {
            key: 'organizationType',
            hide: true,
            type: 'input',
            props: { label: 'Organization Type', hideOptional: true },
          },
          {
            key: 'businessType',
            hide: true,
            type: 'input',
            props: { label: 'Business Type', hideOptional: true },
          },
          {
            key: 'organizationFactors',
            hide: true,
            type: 'input',
            props: { label: 'Organization Factors', hideOptional: true },
          },
          {
            key: 'lineOfBusiness',
            hide: true,
            type: 'input',
            props: { label: 'Line of Business', hideOptional: true },
          },
          {
            key: 'relationships',
            hide: true,
            type: 'input',
            props: {
              label: 'Relationships with Federal Government (Purpose of Registration)',
              hideOptional: true,
            },
          },
          {
            key: 'state',
            hide: true,
            type: 'input',
            props: { label: 'State of incorporation', hideOptional: true },
          },
          {
            key: 'country',
            hide: true,
            type: 'input',
            props: { label: 'Country of incorporation', hideOptional: true },
          },
        ],
      },
      {
        key: 'awardeeSizeSelection',
        props: { label: 'Size Awardee' },
        fieldGroup: [
          {
            key: 'contractingOfficerBusiessSizeSelection',
            hide: true,
            type: 'select',
            props: {
              label: "Contracting Officer's Business Size Determination",
              hideOptional: true,
              options: [
                { label: 'S - Small Business', value: 's' },
                { label: 'O - Other Than Small Business', value: 'o' },
              ],
            },
          },
          {
            key: 'reasonNotAwardToSmallBusiness',
            hide: true,
            type: 'input',
            props: { label: 'Reason Not Award to Small Business', hideOptional: true },
          },
          {
            key: 'reasonNotToAwardToSmallDisadvantagedBusiness',
            hide: true,
            type: 'input',
            props: { label: 'Reason Not Award to Small Disadvantaged Business', hideOptional: true },
          },
        ],
      },
      {
        key: 'awardeeOtherDetails',
        props: { label: 'Other Awardee' },
        fieldGroup: [
          {
            key: 'domesticOrForeignEntity',
            hide: true,
            type: 'select',
            props: {
              label: 'Domestic or Foreign Entity',
              hideOptional: true,
              options: [
                { label: 'A - U.S. Owned Business', value: 'A' },
                { label: 'B - Other U.S. Entity (e.g. Government)', value: 'B' },
                { label: 'C - Foreign-Owned Business Incorporated in the U.S.', value: 'C' },
                { label: 'D - Foreign-Owned Business not Incorporated in the U.S.', value: 'D' },
                { label: 'O - Other Foreign Entity (e.g. Foreign Government)', value: 'O' },
              ],
            },
          },
          {
            key: 'seaTransportation',
            hide: true,
            type: 'select',
            props: {
              label: 'Sea Transportation',
              hideOptional: true,
              options: [
                { label: 'Y - Yes', value: 'y' },
                { label: 'N - No', value: 'n' },
                { label: 'U - Unknown', value: 'u' },
              ],
            },
          },
        ],
      },
      {
        key: 'awardIdentification',
        props: { label: 'Identification Awardee' },
        fieldGroup: [
          { key: 'piid', hide: false, type: 'input', props: { label: 'PIID', hideOptional: true } },
          {
            key: 'modificationNumber',
            hide: false,
            type: 'input',
            props: { label: 'Modification Number', hideOptional: true },
          },
        ],
      },
    ],
  },
  {
    key: 'referencedAwardIdentification',
    props: { label: 'Referenced Award Identification', group: 'accordion' },
    fieldGroup: [
      { key: 'piid', hide: false, type: 'input', props: { label: 'PIID', hideOptional: true } },
      {
        key: 'modificationNumber',
        hide: false,
        type: 'input',
        props: { label: 'Modification Number', hideOptional: true },
      },
    ],
  },
  {
    key: 'otherDetails',
    props: { label: 'Type of Contract', group: 'accordion' },
    fieldGroup: [
      {
        key: 'typeOfContract',
        hide: false,
        type: 'select',
        props: {
          label: '',
          hideOptional: true,
          options: [
            { label: 'A - Fixed Price Redetermination', value: 'A' },
            { label: 'B - Fixed Price Level of Effort', value: 'B' },
            { label: 'J - Firm Fixed Price', value: 'J' },
            { label: 'K - Fixed Price with Economic Price Adjustment', value: 'K' },
            { label: 'L - Fixed Price Incentive', value: 'L' },
            { label: 'M - Fixed Price Award Fee', value: 'M' },
            { label: 'R - Cost Plus Award Fee', value: 'R' },
            { label: 'S - Cost No Fee', value: 'S' },
            { label: 'T - Cost Sharing', value: 'T' },
            { label: 'U - Cost Plus Fixed Fee', value: 'U' },
            { label: 'V - Cost Plus Incentive Fee', value: 'V' },
            { label: 'Y - Time and Materials', value: 'Y' },
            { label: 'Z - Labor Hours', value: 'Z' },
            {
              label: '1 - Order Dependent (IDV allows pricing arrangement to be determined separately for each order)',
              value: '1',
            },
          ],
        },
      },
    ],
  },
  {
    key: 'keyDates',
    props: { label: 'Dates', group: 'accordion' },
    fieldGroup: [
      {
        key: 'dateSigned',
        hide: false,
        group: 'panel',
        props: { label: 'Date Signed' },
        fieldGroup: [
          {
            key: 'dateSignedSelect',
            type: 'select',
            props: {
              hideOptional: true,
              placeholder: 'Anytime',
              options: [
                { label: 'Next day', value: 'next24' },
                { label: 'Next 2 days', value: 'next2days' },
                { label: 'Next 3 days', value: 'next3days' },
                { label: 'Next week', value: 'nextWeek' },
                { label: 'Next month', value: 'nextMonth' },
                { label: 'Next 3 months', value: 'next3Months' },
                { label: 'Next year', value: 'nextYear' },
                { label: 'Custom date', value: 'customDate' },
              ],
              label: 'Date Signed',
            },
          },
          {
            key: 'dateSignedFrom',
            type: 'datepicker',
            props: { hideOptional: true, label: 'From' },
            modelOptions: { updateOn: 'blur' },
            autoClear: true,
          },
          {
            key: 'dateSignedTo',
            type: 'datepicker',
            props: { hideOptional: true, label: 'To' },
            modelOptions: { updateOn: 'blur' },
            autoClear: true,
          },
        ],
      },
      {
        key: 'completionDate',
        hide: false,
        group: 'panel',
        props: { label: 'Completion Date' },
        fieldGroup: [
          {
            key: 'completionDateSelect',
            type: 'select',
            props: {
              hideOptional: true,
              placeholder: 'Anytime',
              options: [
                { label: 'Next day', value: 'next24' },
                { label: 'Next 2 days', value: 'next2days' },
                { label: 'Next 3 days', value: 'next3days' },
                { label: 'Next week', value: 'nextWeek' },
                { label: 'Next month', value: 'nextMonth' },
                { label: 'Next 3 months', value: 'next3Months' },
                { label: 'Next year', value: 'nextYear' },
                { label: 'Custom date', value: 'customDate' },
              ],
              label: 'Completion Date',
            },
          },
          {
            key: 'completionDateFrom',
            type: 'datepicker',
            props: { hideOptional: true, label: 'From' },
            modelOptions: { updateOn: 'blur' },
            autoClear: true,
          },
          {
            key: 'completionDateTo',
            type: 'datepicker',
            props: { hideOptional: true, label: 'To' },
            modelOptions: { updateOn: 'blur' },
            autoClear: true,
          },
        ],
      },
      {
        key: 'estimatedUltimateCompletionDate',
        hide: false,
        group: 'panel',
        props: { label: 'Estimated Ultimate Completion Date' },
        fieldGroup: [
          {
            key: 'estimatedUltimateCompletionDateSelect',
            type: 'select',
            props: {
              hideOptional: true,
              placeholder: 'Anytime',
              options: [
                { label: 'Next day', value: 'next24' },
                { label: 'Next 2 days', value: 'next2days' },
                { label: 'Next 3 days', value: 'next3days' },
                { label: 'Next week', value: 'nextWeek' },
                { label: 'Next month', value: 'nextMonth' },
                { label: 'Next 3 months', value: 'next3Months' },
                { label: 'Next year', value: 'nextYear' },
                { label: 'Custom date', value: 'customDate' },
              ],
              label: 'Estimated Ultimate Completion Date',
            },
          },
          {
            key: 'estimatedUltimateCompletionDateFrom',
            type: 'datepicker',
            props: { hideOptional: true, label: 'From' },
            modelOptions: { updateOn: 'blur' },
            autoClear: true,
          },
          {
            key: 'estimatedUltimateCompletionDateTo',
            type: 'datepicker',
            props: { hideOptional: true, label: 'To' },
            modelOptions: { updateOn: 'blur' },
            autoClear: true,
          },
        ],
      },
    ],
  },
];
