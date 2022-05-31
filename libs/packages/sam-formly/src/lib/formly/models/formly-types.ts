export enum SdsFormlyTypes {
  INPUT = 'input',
  BUTTON = 'button',
  CHECKBOX = 'checkbox',
  MULTICHECKBOX = 'multicheckbox',
  RADIO = 'radio',
  AUTOCOMPLETE = 'autocomplete',
  DATEPICKER = 'datepicker',
  SELECT = 'select',
  TEXTAREA = 'textarea',
  READONLY = 'readonly',
  DATERANGEPICKER = 'daterangepicker',
  DATERANGEPICKERV2 = 'daterangepickerv2',
  FORMLYGROUP = 'formly-group',
  CUSTOMTEXT = 'customtext',
  EDITOR = 'editor',
  FILEINFO = 'fileinfo',
  SEARCH = 'search',
  FILEINPUT = 'fileinput',
  TABS = 'tabs',
  RICHTEXTEDITOR = 'rich-text-editor',

  /**
   * This formly type should generally be used with another formly type in order
   * to render the values of that formly type in a table.
   *
   * Template Options:
   *
   * tableColumns - An array of SdsTableColumn objects
   *
   * name - The accessible name for this table
   *
   * noDataText - Text to render when no data is available for the table
   */
  TABLE = 'table',
}

export enum SdsReadonlyTypes {
  INPUT = 'input',
  CHECKBOX = 'checkbox',
  MULTICHECKBOX = 'multicheckbox',
  RADIO = 'radio',
  AUTOCOMPLETE = 'autocomplete',
  DATEPICKER = 'datepicker',
  SELECT = 'select',
  TEXTAREA = 'textarea',
  READONLY = 'readonly',
  DATERANGEPICKER = 'daterangepicker',
  DATERANGEPICKERV2 = 'daterangepickerv2',
  FILEINFO = 'fileinfo',
  SEARCH = 'search',
}
