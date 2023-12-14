import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {
  SdsButtonGroupComponent,
  SdsButtonGroupModule,
  SdsButtonGroupOptionComponent,
} from '@gsa-sam/sam-material-extensions';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { ButtonGroupCheckedModule } from './button-group-checked/button-group-checked.module';
import { ButtonGroupIntroductionModule } from './button-group-introduction/button-group-introduction.module';
import { ButtonGroupModesModule } from './button-group-modes/button-group-modes.module';

const disable = {
  table: {
    disable: true,
  },
};

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
        ButtonGroupIntroductionModule,
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
    change: disable,
    buttonOptions: disable,
    classesToApply: disable,
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
  preview: { disable: true },
};

export const Modes: Story = (args) => ({
  template: `<sds-button-group-modes></sds-button-group-modes>`,
  props: args,
});
Modes.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/button-group/button-group-modes',
    'ButtonGroupModesModule',
    'sds-button-group-modes'
  ),
  stackblitzLink: generateStackblitzLink('button-group', 'modes'),
};

export const Checked: Story = (args) => ({
  template: `<sds-button-group-checked></sds-button-group-checked>`,
  props: {
    ...args,
  },
});
Checked.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/button-group/button-group-checked',
    'ButtonGroupBasicModule',
    'sds-button-group-checked'
  ),
  stackblitzLink: generateStackblitzLink('button-group', 'checked'),
};

export const Introduction: Story = (args) => ({
  template: '<sds-button-group-introduction></sds-button-group-introduction>',
  props: args,
});
Introduction.parameters = {
  options: { showPanel: false },
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: { disable: true },
};

export const __namedExportsOrder = ['Introduction', 'Configurable', 'Checked', 'Modes'];
