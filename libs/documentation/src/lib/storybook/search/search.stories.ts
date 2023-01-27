import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsSearchComponent, SdsSearchModule, SearchSettings } from '@gsa-sam/components';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { SearchSizeModule } from './search-size/search-size.module';
import { SearchPlaceholderModule } from './search-placeholder/search-placeholder.module';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { SearchDropdownModule } from './search-dropdown/search-dropdown.module';
import { SearchIntroductionModule } from './search-introduction/search-introduction.module';

declare var require: any;

const overviewTemplate = require('!!raw-loader!./search-overview.html');

const disable = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Components/Search',
  component: SdsSearchComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        SdsSearchModule,
        FormsModule,
        ReactiveFormsModule,
        SearchSizeModule,
        SearchPlaceholderModule,
        SearchDropdownModule,
        SearchIntroductionModule,
      ],
    }),
  ],
  argTypes: {
    onSubmit: {
      action: 'onSubmit',
      table: {
        disable: true,
      },
    },
    modelChange: {
      action: 'modelChange',
      table: {
        disable: true,
      },
    },
    inputState: disable,
    model: disable,
    onChange: disable,
    onTouched: disable,
    submit: disable,
    calculateInputWidth: disable,
    clearInput: disable,
    focusChange: disable,
    getClass: disable,
    handleClick: disable,
    hasDropdown: disable,
    isInputVisible: disable,
    ngAfterViewInit: disable,
    registerOnChange: disable,
    registerOnTouched: disable,
    removeInputVisibleStyles: disable,
    setInputVisibleStyles: disable,
    writeValue: disable,
    writeValueToModel: disable,
    buttonEl: disable,
    inputEl: disable,
    selectEl: disable,
    searchSettings: disable,
    placeholder: {
      description: '',
      table: {
        category: 'searchSettings',
      },
    },
    isSuffixSearchIcon: {
      description: '',
      table: {
        category: 'searchSettings',
      },
    },
    size: {
      control: {
        options: ['small', 'large'],
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
      },
      description: '',
      table: {
        category: 'searchSettings',
      },
    },
    inputClass: {
      description: '',
      table: {
        category: 'searchSettings',
      },
    },
    parentSelector: {
      description: '',
      table: {
        category: 'searchSettings',
      },
    },
    id: {
      description: '',
      table: {
        category: 'searchSettings',
      },
    },
    ariaLabel: {
      description: '',
      table: {
        category: 'searchSettings',
      },
    },
  },
} as Meta;

const searchSettingsFunction = (
  placeholder?: string,
  isSuffixSearchIcon?: boolean,
  size?: string,
  inputClass?: string,
  parentSelector?: string,
  id?: string,
  ariaLabel?: string
) => {
  const toReturn = new SearchSettings();
  toReturn.placeholder = placeholder ?? 'Search';
  toReturn.isSuffixSearchIcon = isSuffixSearchIcon ?? false;
  toReturn.size = size;
  toReturn.inputClass = inputClass;
  toReturn.parentSelector = parentSelector;
  toReturn.id = id;
  toReturn.ariaLabel = ariaLabel ?? 'Search';
  return toReturn;
};

const Template: Story<SearchSettings> = (args: SearchSettings) => {
  const { placeholder, isSuffixSearchIcon, size, inputClass, parentSelector, id, ariaLabel } = args;
  const settings = searchSettingsFunction(
    placeholder,
    isSuffixSearchIcon,
    size,
    inputClass,
    parentSelector,
    id,
    ariaLabel
  );
  return {
    template: `
    <sds-search [(ngModel)]="model" (submit)="onSubmit($event)" (ngModelChange)="modelChange($event)" [searchSettings]="settings"
  ></sds-search>
    <pre>Model: {{model | json}}</pre>
  `,
    props: {
      // ...args
      // Must do as destructive args leads to props such as onChange not being found.
      onSubmit: args['onSubmit'],
      modelChange: args['modelChange'],
      searchSettings: args['searchSettings'],
      model: args['model'],
      settings: settings,
    },
  };
};

export const Configurable = Template.bind({});
Configurable.args = {
  searchSettings: {
    placeholder: 'eg: Acme Corporation',
    isSuffixSearchIcon: false,
    size: 'small',
    inputClass: '',
    parentSeletor: '',
    id: 'searchBasic',
    ariaLabel: 'Basic Search',
  },
  placeholder: '',
  isSuffixSearchIcon: false,
  size: '',
  inputClass: '',
  parentSelector: '',
  id: '',
  ariaLabel: '',
  model: {},
};
Configurable.parameters = {
  preview: { disabled: true },
};

export const Size: Story = (args) => ({
  template: `<sds-search-size></sds-search-size>`,
  props: args,
});
Size.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/search/search-size', 'ButtonGroupBasicModule', 'sds-button-group-demo'),
  stackblitzLink: generateStackblitzLink('search', 'size'),
};

export const Placeholder: Story = (args) => ({
  template: `<sds-search-placeholder></sds-search-placeholder>`,
  props: args,
});
Placeholder.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/search/search-placeholder', 'ButtonGroupBasicModule', 'sds-button-group-demo'),
  stackblitzLink: generateStackblitzLink('search', 'placeholder'),
};

export const Dropdown: Story = (args) => ({
  template: `<sds-search-dropdown></sds-search-dropdown>`,
  props: args,
});
Dropdown.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/search/search-dropdown', 'ButtonGroupBasicModule', 'sds-button-group-demo'),
  stackblitzLink: generateStackblitzLink('search', 'dropdown'),
};

export const Overview = () => ({
  template: overviewTemplate,
});
Overview.parameters = { options: { showPanel: false } };

export const Introduction: Story = (args) => ({
  template: '<sds-search-introduction></sds-search-introduction>',
  props: args,
});
Introduction.parameters = {
  options: { showPanel: false },
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: { disabled: true },
};

export const __namedExportsOrder = ['Introduction', 'Overview', 'Configurable', 'Dropdown', 'Placeholder', 'Size'];
