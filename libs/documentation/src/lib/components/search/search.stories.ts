import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsSearchComponent, SdsSearchModule } from '@gsa-sam/components';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

declare var require: any;

const overviewTemplate = require('!!raw-loader!./search-overview.html');
const sizeDemoTemplate = require('!!raw-loader!./demos/size/search-size.component.html');
const placeholderDemoTemplate = require('!!raw-loader!./demos/placeholder/search-placeholder.component.html');
const dropdownDemoTemplate = require('!!raw-loader!./demos/dropdown/search-dropdown.component.html');

const actionsData = {
  onsearchModelChanges: action('onsearchModelChanges'),
  onSubmit: action('onSubmit'),
};

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
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

export const Overview = () => ({
  template: overviewTemplate,
});
Overview.parameters = { options: { showPanel: false } };

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SdsSearchComponent> = (args: SdsSearchComponent) => ({
  template: `
  <sds-search [(ngModel)]="model" (submit)="onSubmit($event)" (ngModelChange)="modelChange($event)" [searchSettings]="searchSettings"
  ></sds-search>
    <p>Model: {{model | json}}</p>
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
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
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

export const Size: Story = (args) => ({
  template: sizeDemoTemplate,
  props: {
    searchSettings: {
      size: 'small',
    },
    largeSearchSettings: {
      size: 'large',
    },
    onSubmit: actionsData.onSubmit,
  },
});

export const Placeholder: Story = (args) => ({
  template: placeholderDemoTemplate,
  props: {
    searchSettings: {
      placeholder: 'Custom Placeholder',
    },
    onSubmit: actionsData.onSubmit,
  },
});

export const Dropdown: Story = (args) => ({
  template: dropdownDemoTemplate,
  props: {
    searchSettings: {
      dropdown: {
        id: 'ddSearchOptions',
        options: [
          { value: '-', label: '--Select--' },
          { value: '1', label: 'One With Long Text' },
          { value: '2', label: 'Two' },
          { value: '3', label: 'Three' },
        ],
      },
    },
    onSubmit: actionsData.onSubmit,
  },
});
