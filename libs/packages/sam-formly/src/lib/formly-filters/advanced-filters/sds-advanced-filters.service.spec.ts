import { TestBed } from '@angular/core/testing';

import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';
import { FormlyFieldConfig } from '@ngx-formly/core';

describe('SdsAdvancedFiltersService', () => {
  let service: SdsAdvancedFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SdsAdvancedFiltersService] });
    service = TestBed.inject(SdsAdvancedFiltersService);
  });

  const checkboxFields: FormlyFieldConfig[] = [
    {
      defaultValue: true,
      key: 'searchKeyword',
      props: { hideOptional: true, label: 'Keyword' },
      type: 'checkbox',
    },
    {
      key: 'searchEntity',
      props: {
        hideOptional: true,
        label: 'Entity',
        type: 'array',
        selectAllOption: true,
        options: [
          { key: 'legalBusinessName', value: 'Entity Name', tagText: undefined, tagClass: undefined },
          { key: 'uniqueEntityIdSam', value: 'Unique Entity ID (SAM)', tagText: 'SAM', tagClass: undefined },
        ],
      },
      type: 'multicheckbox',
    },
    {
      key: 'hideGroup',
      defaultValue: ['hideField1', 'hideGroup', 'hideField2', 'hideGroup'],
      type: 'multicheckbox',
      props: {
        hideOptional: true,
        type: 'array',
        selectAllOption: true,
        options: [
          { key: 'hideField1', value: null, tagText: undefined, tagClass: undefined },
          { key: 'hideField2', value: null, tagText: undefined, tagClass: undefined },
        ],
      },
    },
  ];

  const model = {
    searchEntity: {},
    hideGroup: {},
  };

  const advancedFilterModel = {
    showInactive: false,
    filterToggle: {
      selectAll: false,
      filters: [
        {
          searchKeyword: false,
          searchEntity: ['uniqueEntityIdSam', 'cageNcge', 'uniqueEntityIdDuns'],
          hideGroup: [],
        },
      ],
    },
  };

  const updatedFields: FormlyFieldConfig[] = [
    {
      key: 'searchKeyword',
      wrappers: ['filterwrapper'],
      type: 'input',
      hide: true,
      props: {
        label: 'Keyword',
        required: false,
      },
    },
    {
      key: 'searchEntity',
      wrappers: ['accordionwrapper'],
      props: { label: 'Entity' },
      hide: true,
      fieldGroup: [
        {
          key: 'legalBusinessName',
          type: 'input',
          hide: true,
          props: {
            required: false,
            label: 'Entity Name',
            placeholder: '',
            inputType: 'text',
          },
        },
        {
          key: 'uniqueEntityIdSam',
          type: 'input',
          hide: true,
          props: {
            label: 'Unique Entity ID (SAM)',
            placeholder: '',
            min: 13,
            max: 40,
            inputType: 'number',
            inputStyle: 'error',
            required: false,
            tagText: 'SAM',
          },
        },
      ],
    },
    {
      key: 'hideGroup',
      wrappers: ['accordionwrapper'],
      hide: true,
      fieldGroup: [
        {
          key: 'hideField1',
          type: 'input',
          hide: true,
          props: {
            inputType: 'text',
            required: false,
          },
        },
        {
          key: 'hideField2',
          type: 'input',
          hide: true,
          props: {
            inputType: 'text',
            required: false,
          },
        },
      ],
    },
  ];

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should be able to convert a Formly form fields to checkboxes', () => {
    const checkBoxConverted = service.convertToCheckboxes(getFields());
    expect(checkBoxConverted).toEqual(checkboxFields);
  });

  it('should update filters based on selected filter options', () => {
    const results = {
      fields: updatedFields,
      model: {
        searchEntity: {
          legalBusinessName: null,
          uniqueEntityIdSam: null,
        },
        hideGroup: {
          hideField1: null,
          hideField2: null,
        },
        searchKeyword: null,
      },
    };
    expect(service.updateFields(advancedFilterModel, getFields(), model)).toBeDefined();
  });

  function getFields() {
    return [
      {
        key: 'searchKeyword',
        wrappers: ['filterwrapper'],
        props: { label: 'Keyword' },
        type: 'input',
      },
      {
        key: 'searchEntity',
        wrappers: ['accordionwrapper'],
        hide: true,
        props: { label: 'Entity' },
        fieldGroup: [
          {
            key: 'legalBusinessName',
            type: 'input',
            hide: true,
            props: {
              label: 'Entity Name',
              placeholder: '',
              inputType: 'text',
            },
          },
          {
            key: 'uniqueEntityIdSam',
            type: 'input',
            hide: true,
            props: {
              label: 'Unique Entity ID (SAM)',
              placeholder: '',
              min: 13,
              max: 40,
              inputType: 'number',
              inputStyle: 'error',
              tagText: 'SAM',
            },
          },
        ],
      },
      {
        key: 'hideGroup',
        wrappers: ['accordionwrapper'],
        fieldGroup: [
          {
            key: 'hideField1',
            type: 'input',
            props: {
              inputType: 'text',
            },
          },
          {
            key: 'hideField2',
            type: 'input',
            props: {
              inputType: 'text',
            },
          },
        ],
      },
    ];
  }
});
