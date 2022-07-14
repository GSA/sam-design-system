import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  SdsButtonGroupComponent,
  SdsButtonGroupModule,
  SdsButtonGroupOptionComponent,
} from '@gsa-sam/sam-material-extensions';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig } from 'libs/documentation/src/sandbox/sandbox-utils';
import { ButtonGroupModesModule } from './demos/button-group-modes/button-group-modes.module';

declare var require: any;

const checkedDemoTemplate = require('!!raw-loader!./demos/checked/button-group-checked.component.html');

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button-Group',
  component: SdsButtonGroupComponent,
  subcomponents: {
    SdsButtonGroupOptionComponent,
  },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        MatButtonToggleModule,
        SdsButtonGroupModule,
        ButtonGroupModesModule,
      ],
    }),
  ],
  argTypes: {
    classesToApply: {
      table: {
        disable: true,
      },
    },
    buttonOptions: {
      table: {
        disable: true,
      },
    },
    change: {
      table: {
        disable: true,
      },
    },
    buttonGroupChanged: {
      action: 'buttonGroupChanged',
      table: {
        disable: true,
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SdsButtonGroupComponent> = (args) => ({
  template: `
  <sds-button-group class="sds-button-group" [ngClass]="[extraClasses]" [mode]="mode" (change)="buttonGroupChanged({source: 'originalEmitter: MatButtonToggle', value: $event.value})">
    <sds-button-group-option *ngFor="let optionText of optionTexts" value="{{optionText}}">{{optionText}}</sds-button-group-option>
  </sds-button-group>
  `,
  props: { ...args },
});

export const Configurable = Template.bind({});
Configurable.args = {
  extraClasses: 'sds-button-group--secondary',
  optionTexts: ['Reports', 'Subscriptions', 'History'],
  mode: 'checkbox',
};

export const Modes: Story = (args) => ({
  template: `<sds-button-group-modes></sds-button-group-modes>`,
  props: args,
});
Modes.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'components/button-group/demos/button-group-modes',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
};

export const Checked: Story = (args) => ({
  template: checkedDemoTemplate,
  props: {
    ...args,
  },
});
Checked.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
};
