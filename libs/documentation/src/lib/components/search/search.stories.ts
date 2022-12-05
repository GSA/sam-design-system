import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsSearchComponent, SdsSearchModule } from '@gsa-sam/components';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { SearchSizeModule } from './demos/search-size/search-size.module';
import { SearchPlaceholderModule } from './demos/search-placeholder/search-placeholder.module';
import { generateConfig } from 'libs/documentation/src/sandbox/sandbox-utils';
import { SearchDropdownModule } from './demos/search-dropdown/search-dropdown.module';

declare var require: any;

const overviewTemplate = require('!!raw-loader!./search-overview.html');

export default {
  title: 'Example/Search',
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
    inputState: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<SdsSearchComponent> = (args: SdsSearchComponent) => ({
  template: `
  <sds-search [(ngModel)]="model" (submit)="onSubmit($event)" (ngModelChange)="modelChange($event)" [searchSettings]="searchSettings"
  ></sds-search>
    <p>Model:</p>
    <pre>{{model | json}}</pre>
  `,
  props: {
    // Must do as destructive args leads to props such as onChange not being found.
    onSubmit: args['onSubmit'],
    modelChange: args['modelChange'],
    searchSettings: args['searchSettings'],
    model: args['model'],
  },
});

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
  preview: generateConfig('components/search/demos/search-size', 'ButtonGroupBasicModule', 'sds-button-group-demo'),
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
  preview: generateConfig(
    'components/search/demos/search-placeholder',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
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
  preview: generateConfig('components/search/demos/search-dropdown', 'ButtonGroupBasicModule', 'sds-button-group-demo'),
};

export const Overview = () => ({
  template: overviewTemplate,
});
Overview.parameters = { options: { showPanel: false } };
