import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsSearchComponent, SdsSearchModule } from '@gsa-sam/components';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

declare var require: any;

const overviewTemplate = require('!!raw-loader!./search-overview.html');
const basicDemoTemplate = require('!!raw-loader!./demos/basic/search-basic.component.html');
const optinalDemoTemplate = require('!!raw-loader!./demos/optional/search-optional.component.html');

const actionsData = {
  onsearchModelChanges: action('onsearchModelChanges'),
  // secondGroupChange: action('secondGroupChange'),
};

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Search',
  component: SdsSearchComponent,
  // parameters: {
  //   docs: false,
  // },
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
    // _onChange: {
    //   table: {
    //     disable: true,
    //   },
    // },
    // _onTouched: {
    //   table: {
    //     disable: true,
    //   },
    // },
  },
} as Meta;

export const Overview = () => ({
  template: overviewTemplate,
});
Overview.parameters = { options: { showPanel: false } };

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SdsSearchComponent> = (args: SdsSearchComponent) => ({
  template: `
  <sds-search [(ngModel)]="model"
  ></sds-search>
    <p>Model: {{model | json}}</p>
  `,
  props: { ...args },
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
  // Fix initial state, storybook trying to parse as string. Leading to errors
  inputState: {
    initial: { visible: undefined },
    visible: undefined,
  },
};

export const BasicSearch: Story = (args) => ({
  template: basicDemoTemplate,
  props: {
    searchSettings: {
      id: 'searchBasic',
      ariaLabel: 'Basic Search',
      placeholder: 'eg: Acme Corporation',
    },
    bigSearchSettings: {
      size: 'large',
      id: 'bigSearchBasic',
      ariaLabel: 'Big Search',
      placeholder: 'eg: Acme Corporation',
    },
    suffixSearchIconSettings: {
      isSuffixSearchIcon: true,
      placeholder: 'eg: Acme Corporation',
      id: 'searchSuffix',
      ariaLabel: 'Suffix Search',
    },
    onsearchModelChanges: actionsData.onsearchModelChanges,
    ...args,
  },
  args: {},
});
BasicSearch.parameters = { options: { showPanel: false } };

export const OptionalSearch: Story = (args) => ({
  template: optinalDemoTemplate,
  props: {
    ddSearchSettings: {
      id: 'ddSearch',
      placeholder: 'eg: Acme Corporation',
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
    invDDSearchSettings: {
      placeholder: 'eg: Acme Corporation',
      id: 'invDDSearch',
      dropdown: {
        id: 'invDDSearchOptions',
        options: [
          { value: '-', label: '--Select--' },
          { value: '1', label: 'One' },
          { value: '2', label: 'Two' },
          { value: '3', label: 'Three' },
        ],
        inverse: true,
      },
    },
    bigddSearchSettings: {
      placeholder: 'eg: Acme Corporation',
      id: 'bigssSearch',
      size: 'large',
      dropdown: {
        id: 'bigddSearchOptions',

        options: [
          { value: '-', label: '--Select--' },
          { value: '1', label: 'One' },
          { value: '2', label: 'Two' },
          { value: '3', label: 'Three' },
        ],
      },
    },
    biginvDDSearchSettings: {
      placeholder: 'eg: Acme Corporation',
      id: 'biginvDDSearch',
      dropdown: {
        id: 'bigInvDDSearchOptions',
        options: [
          { value: '1', label: 'One' },
          { value: '2', label: 'Two' },
          { value: '3', label: 'Three' },
        ],
        inverse: true,
      },
      size: 'large',
    },
    // onsearchModelChanges: actionsData.onsearchModelChanges,
    ...args,
  },
  args: {},
});
OptionalSearch.parameters = { options: { showPanel: false } };
