import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  SdsButtonGroupComponent,
  SdsButtonGroupModule,
  SdsButtonGroupOptionComponent,
} from '@gsa-sam/sam-material-extensions';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig } from 'libs/documentation/src/sandbox/sandbox-utils';
import { ButtonGroupCheckedModule } from './demos/button-group-checked/button-group-checked.module';
import { ButtonGroupModesModule } from './demos/button-group-modes/button-group-modes.module';

export default {
  title: 'Components/Button-Group',
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
        ButtonGroupCheckedModule,
      ],
    }),
  ],
  argTypes: {
    buttonGroupChanged: {
      action: 'buttonGroupChanged',
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<SdsButtonGroupComponent> = (args) => ({
  template: `
  <sds-button-group class="sds-button-group" [ngClass]="[extraClasses]" [mode]="mode" (change)="buttonGroupChanged({source: 'originalEmitter: MatButtonToggle', value: $event.value})">
    <sds-button-group-option *ngFor="let optionText of optionTexts" value="{{optionText}}">{{optionText}}</sds-button-group-option>
  </sds-button-group>
  `,
  props: args,
});

export const Configurable = Template.bind({});
Configurable.args = {
  extraClasses: 'sds-button-group--secondary',
  optionTexts: ['Reports', 'Subscriptions', 'History'],
  mode: 'checkbox',
};
Configurable.parameters = {
  preview: { disabled: true },
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
  template: `<sds-button-group-checked></sds-button-group-checked>`,
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
  preview: generateConfig(
    'components/button-group/demos/button-group-checked',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
};
