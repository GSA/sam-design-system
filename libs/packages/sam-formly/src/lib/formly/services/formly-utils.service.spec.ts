import { FormlyFieldConfig } from '@ngx-formly/core';
import { SdsFormlyTypes } from '../models/formly-types';
import { FormlyUtilsService } from './formly-utils.service';

describe('Formly Utility Service', () => {
  it('Should properly toggle on readonly mode for field configs', () => {
    const formlyFields = getDefaultFormlyFields();
    FormlyUtilsService.setReadonlyMode(true, formlyFields);
    formlyFields.forEach((field) => {
      expect(field.templateOptions.readonlyMode).toBeTruthy();
    });
  });

  it('Should propeerly parse formly field config into readonly essential data', () => {
    const formlyFields = getDefaultFormlyFields();
    const demoModel = {
      key1: 'test',
      key2: 'select2',
      key3: { id: 1, name: 'Jane' },
    };

    const parsedData = FormlyUtilsService.formlyConfigToReadonlyData(
      formlyFields,
      demoModel
    );
    expect(parsedData[0].label).toEqual('Input Type');
    expect(parsedData[0].value).toEqual('test');

    expect(parsedData[1].label).toEqual('Select Type');
    expect(parsedData[1].value).toEqual('select2');
    expect(parsedData[1].readonlyOptions.providedOptions).toBeDefined();

    expect(parsedData[2].label).toEqual('Autocomplete Type');
    expect(parsedData[2].value).toEqual({ id: 1, name: 'Jane' });
    expect(parsedData[2].readonlyOptions.autocompleteOptions).toBeDefined();
  });

  function getDefaultFormlyFields() {
    const formlyFieldConfigs: FormlyFieldConfig[] = [
      {
        key: 'key1',
        type: SdsFormlyTypes.INPUT,
        templateOptions: {
          label: 'Input Type',
        },
      },
      {
        key: 'key2',
        type: SdsFormlyTypes.SELECT,
        templateOptions: {
          label: 'Select Type',
          options: [
            { label: 'Select 1', value: 'select1' },
            { label: 'Select 2', value: 'select2' },
            { label: 'Select 3', value: 'select3' },
          ],
        },
      },
      {
        key: 'key3',
        type: SdsFormlyTypes.AUTOCOMPLETE,
        templateOptions: {
          label: 'Autocomplete Type',
          configuration: {
            primaryTextField: 'name',
          },
        },
      },
    ];

    return formlyFieldConfigs;
  }
});
