import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode } from '@gsa-sam/components';
import { FormlyUtilsService, SdsFormlyTypes } from '@gsa-sam/sam-formly';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { AutocompleteSampleDataService } from './autocomplete-sample.service';

@Component({
  selector: 'sds-formly-wrapper-read-only-basic',
  templateUrl: './formly-wrapper-read-only-basic.component.html',
  providers: [AutocompleteSampleDataService],
})
export class FormlyWrapperReadOnlyBasicComponent {
  autocompleteSingleSelectSettings = new SDSAutocompletelConfiguration();
  autocompleteMultiSelectSettings = new SDSAutocompletelConfiguration();

  constructor(private autocompleteSampleDataService: AutocompleteSampleDataService) {}

  readonlyModes = {
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
      props: {
        label: 'Input Type',
        tagText: 'Tag',
        description: 'Enter text',
        hideOptional: true,
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      props: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.inputType = !this.readonlyModes.inputType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.inputType, this.inputTypefields);
        },
      },
    },
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
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
      ut aliquip ex ea commodo consequat.',
      props: {
        label: 'Textarea Type',
        description: 'Enter text',
        tagText: 'Purple Tag',
        tagClass: 'sds-tag--info-purple',
        hideOptional: true,
        rows: 6,
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      props: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.textareaType = !this.readonlyModes.textareaType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.textareaType, this.textareaTypeFields);
        },
      },
    },
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
      props: {
        label: 'Checkbox',
        description: 'Toggle Checkbox',
        hideOptional: true,
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      props: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.checkboxType = !this.readonlyModes.checkboxType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.checkboxType, this.checkboxTypeFields);
        },
      },
    },
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
      props: {
        label: 'Datepicker Type',
        description: 'Enter a date',
        hideOptional: true,
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      props: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.datepickerType = !this.readonlyModes.datepickerType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.datepickerType, this.datepickerTypeFields);
        },
      },
    },
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
      props: {
        label: 'Daterangepicker Type',
        description: 'Enter a date range',
        hideOptional: true,
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      props: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.daterangepickerType = !this.readonlyModes.daterangepickerType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.daterangepickerType, this.daterangePickerTypeFields);
        },
      },
    },
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
      props: {
        label: 'Select file type',
        hideOptional: true,
        options: [
          { value: 'Default', key: 'CSV', description: '-Limited to 5000' },
          { value: 'Full', key: 'ZIP', description: '-Limited to 10,000' },
          { value: 'Case', key: 'PDF', description: '-Limited to 8000' },
          { value: 'All', key: 'XLS', description: '-Limited to 45000' },
        ],
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      props: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.fileinfoType = !this.readonlyModes.fileinfoType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.fileinfoType, this.fileinfoTypeFields);
        },
      },
    },
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
      props: {
        label: 'Select From Multiple Checkboxes',
        description: 'Choose desired toppings',
        hideOptional: true,
        options: [
          { value: 'tomato', label: 'Tomato' },
          { value: 'onion', label: 'Onion' },
          { value: 'pickles', label: 'Pickles' },
          { value: 'lettuce', label: 'Lettuce' },
        ],
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      props: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.multicheckboxType = !this.readonlyModes.multicheckboxType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.multicheckboxType, this.multicheckboxTypeFields);
        },
      },
    },
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
      props: {
        label: 'Select From Radio Options',
        description: 'Choose a radio option',
        hideOptional: true,
        options: [
          { value: 'optiona', label: 'Option A' },
          { value: 'optionb', label: 'Option B' },
          { value: 'optionc', label: 'Option C' },
        ],
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      props: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.radioType = !this.readonlyModes.radioType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.radioType, this.radioTypeFields);
        },
      },
    },
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
      props: {
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
        ],
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      props: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.selectType = !this.readonlyModes.selectType;
          FormlyUtilsService.setReadonlyMode(this.readonlyModes.selectType, this.selectTypeFields);
        },
      },
    },
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
      props: {
        label: 'Single Select Autocomplete',
        description: 'Select an item',
        hideOptional: true,
        configuration: this.autocompleteSingleSelectSettings,
        service: this.autocompleteSampleDataService,
        model: new SDSSelectedItemModel(),
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      props: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.autocompleteSingleSelectType = !this.readonlyModes.autocompleteSingleSelectType;
          FormlyUtilsService.setReadonlyMode(
            this.readonlyModes.autocompleteSingleSelectType,
            this.autocompleteSingleSelectFields
          );
        },
      },
    },
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
      props: {
        label: 'Multi Select Autocomplete',
        description: 'Select items',
        hideOptional: true,
        configuration: this.autocompleteMultiSelectSettings,
        service: this.autocompleteSampleDataService,
        model: new SDSSelectedItemModel(),
      },
    },
    {
      className: 'display-inline-flex margin-left-4',
      type: SdsFormlyTypes.BUTTON,
      props: {
        text: 'Toggle Readonly',
        onClick: () => {
          this.readonlyModes.autocompleteMultiSelectType = !this.readonlyModes.autocompleteMultiSelectType;
          FormlyUtilsService.setReadonlyMode(
            this.readonlyModes.autocompleteMultiSelectType,
            this.autocompleteMultiSelectFields
          );
        },
      },
    },
  ];

  ngOnInit() {
    this.autocompleteSingleSelectSettings.id = 'autocompletesingle';
    this.autocompleteSingleSelectSettings.primaryKeyField = 'id';
    this.autocompleteSingleSelectSettings.primaryTextField = 'name';
    this.autocompleteSingleSelectSettings.secondaryTextField = 'subtext';
    this.autocompleteSingleSelectSettings.labelText = 'Autocomplete Single Select';
    this.autocompleteSingleSelectSettings.selectionMode = SelectionMode.SINGLE;
    this.autocompleteSingleSelectSettings.autocompletePlaceHolderText = 'eg: Level 1';
    this.autocompleteSingleSelectSettings.isFreeTextEnabled = true;

    this.autocompleteMultiSelectSettings.id = 'autocompletesingle';
    this.autocompleteMultiSelectSettings.primaryKeyField = 'id';
    this.autocompleteMultiSelectSettings.primaryTextField = 'name';
    this.autocompleteMultiSelectSettings.secondaryTextField = 'subtext';
    this.autocompleteMultiSelectSettings.labelText = 'Autocomplete Single Select';
    this.autocompleteMultiSelectSettings.selectionMode = SelectionMode.MULTIPLE;
    this.autocompleteMultiSelectSettings.autocompletePlaceHolderText = 'eg: Level 1';
    this.autocompleteMultiSelectSettings.isFreeTextEnabled = true;
  }
}
