import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { FormlyUtilsService, SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AutocompleteSampleDataService } from './autocomplete-sample.service';

@Component({
  selector: 'sds-readonly-basic-demo',
  templateUrl: './readonly-basic.component.html',
  providers: [ AutocompleteSampleDataService ]

})
export class ReadonlyBasicComponent implements OnInit {

  autocompleteSingleSelectSettings = new SDSAutocompletelConfiguration();
  autocompleteMultiSelectSettings = new SDSAutocompletelConfiguration();

  constructor(
    private autocompleteSampleDataService: AutocompleteSampleDataService,
  ) {}

  readonlyModes =  {
    inputType: false,
    textareaType: false,
    checkboxType: false,
    datepickerType: false,
    daterangepickerType: false,
    fileinfoType: false,
    multicheckboxType: false,
    radioType: false,
    selectType: false,
    autocompleteSingleSelectType: false,
    autocompleteMultiSelectType: false,
  };

  /**
   * INPUT DEMO
   */
  inpuyTypeform = new FormGroup({});
  inputTypefields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-7 display-inline-block',
      key: 'input',
      type: SdsFormlyTypes.INPUT,
      defaultValue: 'Jane',
      templateOptions: {
        label: 'Input Type',
        description: 'Enter text',
        hideOptional: true,
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      templateOptions: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.inputType = !this.readonlyModes.inputType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.inputType, this.inputTypefields);
        },
      }
    }
  ];

  /**
   * TEXTAREA DEMO
   */
  textareaTypeForm = new FormGroup({});
  textareaTypeFields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-7 display-inline-block',
      key: 'textareaText',
      type: SdsFormlyTypes.TEXTAREA,
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
      ut aliquip ex ea commodo consequat.',
      templateOptions: {
        label: 'Textarea Type',
        description: 'Enter text',
        hideOptional: true,
        rows: 6,
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      templateOptions: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.textareaType = !this.readonlyModes.textareaType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.textareaType, this.textareaTypeFields);
        },
      }
    }
  ];

  /**
   * CHECKBOX DEMO
   */
  checkboxTypeForm = new FormGroup({});
  checkboxTypeFields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-7 display-inline-block',
      key: 'checkboxDemo',
      type: SdsFormlyTypes.CHECKBOX,
      defaultValue: true,
      templateOptions: {
        label: 'Checkbox',
        description: 'Toggle Checkbox',
        hideOptional: true,
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      templateOptions: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.checkboxType = !this.readonlyModes.checkboxType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.checkboxType, this.checkboxTypeFields);
        },
      }
    }
  ];

  /**
   * Datepicker Type
   */
  datepickerTypeForm = new FormGroup({});
  datepickerTypeFields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-7 display-inline-block',
      key: 'datepicker',
      type: SdsFormlyTypes.DATEPICKER,
      defaultValue: new Date(),
      templateOptions: {
        label: 'Datepicker Type',
        description: 'Enter a date',
        hideOptional: true,
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      templateOptions: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.datepickerType = !this.readonlyModes.datepickerType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.datepickerType, this.datepickerTypeFields);
        },
      }
    }
  ];

  /**
   * Datepicker Type
   */
  daterangePickerTypeForm = new FormGroup({});
  daterangePickerTypeFields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-7 display-inline-block',
      key: 'daterangepicker',
      type: SdsFormlyTypes.DATERANGEPICKER,
      defaultValue: new Date(),
      templateOptions: {
        label: 'Daterangepicker Type',
        description: 'Enter a date range',
        hideOptional: true,
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      templateOptions: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.daterangepickerType = !this.readonlyModes.daterangepickerType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.daterangepickerType, this.daterangePickerTypeFields);
        },
      }
    }
  ];

  /**
   * Fileinfo Type Demo
   */
  fileinfoTypeForm = new FormGroup({});
  fileinfoTypeFields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-7 display-inline-block',
      key: 'fileType',
      type: SdsFormlyTypes.FILEINFO,
      templateOptions: {
        label: 'Select file type',
        hideOptional: true,
        options: [
          { value: 'Default', key: 'CSV', description: '-Limited to 5000' },
          { value: 'Full', key: 'ZIP', description: '-Limited to 10,000' },
          { value: 'Case', key: 'PDF', description: '-Limited to 8000' },
          { value: 'All', key: 'XLS', description: '-Limited to 45000' }
        ]
      }
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      templateOptions: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.fileinfoType = !this.readonlyModes.fileinfoType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.fileinfoType, this.fileinfoTypeFields);
        },
      }
    }
  ];

  /**
   * Multicheckbox demo
   */
  multicheckboxTypeForm = new FormGroup({});
  multicheckboxTypeFields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-7 display-inline-block',
      key: 'multicheckbox',
      type: SdsFormlyTypes.MULTICHECKBOX,
      templateOptions: {
        label: 'Select From Multiple Checkboxes',
        description: 'Choose desired toppings',
        hideOptional: true,
        options: [
          { key: 'tomato', value: 'Tomato'},
          { key: 'onion', value: 'Onion'},
          { key: 'pickles', value: 'Pickles'},
          { key: 'lettuce', value: 'Lettuce'},
        ]
      }
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      templateOptions: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.multicheckboxType = !this.readonlyModes.multicheckboxType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.multicheckboxType, this.multicheckboxTypeFields);
        },
      }
    }
  ];

  /**
   * Radio Demo
   */
  radioTypeForm = new FormGroup({});
  radioTypeFields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-7 display-inline-block',
      key: 'radioType',
      type: SdsFormlyTypes.RADIO,
      templateOptions: {
        label: 'Select From Radio Options',
        description: 'Choose a radio option',
        hideOptional: true,
        options: [
          { key: 'optiona', value: 'Option A'},
          { key: 'optionb', value: 'Option B'},
          { key: 'optionc', value: 'Option C'},
        ]
      }
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      templateOptions: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.radioType = !this.readonlyModes.radioType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.radioType, this.radioTypeFields);
        },
      }
    }
  ];

  /**
   * Select Demo
   */
  selectTypeForm = new FormGroup({});
  selectTypeFields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-7 display-inline-block',
      key: 'selectType',
      type: SdsFormlyTypes.SELECT,
      defaultValue: 'Select',
      templateOptions: {
        label: 'Select From Provided Options',
        description: 'Choose a state',
        hideOptional: true,
        options: [
          { id: '0', label: '--Select--', value: 'Select' },
          { id: '1', label: 'Alabama', value: 'Alabama' },
          { id: '2', label: 'Alaska', value: 'Alaska' },
          { id: '3', label: 'Arizona', value: 'Arizona' },
          { id: '4', label: 'Arkansas', value: 'Arkansas' },
          { id: '5', label: 'California', value: 'California' },
        ]
      }
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      templateOptions: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.selectType = !this.readonlyModes.selectType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.selectType, this.selectTypeFields);
        },
      }
    }
  ];


  /**
   * Autocomplete Single Select Demo
   */
  autocompleteSingleSelectForm = new FormGroup({});
  autocompleteSingleSelectFields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-7 display-inline-block',
      key: 'autocompleteSingle',
      type: SdsFormlyTypes.AUTOCOMPLETE,
      templateOptions: {
        label: 'Single Select Autocomplete',
        description: 'Select an item',
        hideOptional: true,
        configuration: this.autocompleteSingleSelectSettings,
        service: this.autocompleteSampleDataService,
        model: new SDSSelectedItemModel(),
      }
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      templateOptions: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.autocompleteSingleSelectType = !this.readonlyModes.autocompleteSingleSelectType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.autocompleteSingleSelectType, this.autocompleteSingleSelectFields);
        },
      }
    }
  ];

    /**
   * Autocomplete Multi-Select Demo
   */
  autocompleteMultiSelectForm = new FormGroup({});
  autocompleteMultiSelectFields: FormlyFieldConfig[] = [
    {
      className: 'grid-col-7 display-inline-block',
      key: 'autocompleteMulti',
      type: SdsFormlyTypes.AUTOCOMPLETE,
      templateOptions: {
        label: 'Multi Select Autocomplete',
        description: 'Select items',
        hideOptional: true,
        configuration: this.autocompleteMultiSelectSettings,
        service: this.autocompleteSampleDataService,
        model: new SDSSelectedItemModel(),
      }
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      templateOptions: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.autocompleteMultiSelectType = !this.readonlyModes.autocompleteMultiSelectType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.autocompleteMultiSelectType, this.autocompleteMultiSelectFields);
        },
      }
    }
  ];

  ngOnInit() {
    this.autocompleteSingleSelectSettings.id = 'autocompletesingle';
    this.autocompleteSingleSelectSettings.primaryKeyField = 'id';
    this.autocompleteSingleSelectSettings.primaryTextField = 'name';
    this.autocompleteSingleSelectSettings.secondaryTextField = 'subtext';
    this.autocompleteSingleSelectSettings.labelText = 'Autocomplete Single Select';
    this.autocompleteSingleSelectSettings.selectionMode = SelectionMode.SINGLE;
    this.autocompleteSingleSelectSettings.autocompletePlaceHolderText = 'Enter text';
    this.autocompleteSingleSelectSettings.isFreeTextEnabled = true;

    this.autocompleteMultiSelectSettings.id = 'autocompletesingle';
    this.autocompleteMultiSelectSettings.primaryKeyField = 'id';
    this.autocompleteMultiSelectSettings.primaryTextField = 'name';
    this.autocompleteMultiSelectSettings.secondaryTextField = 'subtext';
    this.autocompleteMultiSelectSettings.labelText = 'Autocomplete Single Select';
    this.autocompleteMultiSelectSettings.selectionMode = SelectionMode.MULTIPLE;
    this.autocompleteMultiSelectSettings.autocompletePlaceHolderText = 'Enter text';
    this.autocompleteMultiSelectSettings.isFreeTextEnabled = true;
  }
}
