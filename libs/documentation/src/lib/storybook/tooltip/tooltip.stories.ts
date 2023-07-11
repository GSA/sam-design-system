import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { TooltipConfigurableModule } from './tooltip-configurable/tooltip-configurable.module';
import { TooltipIntroductionModule } from './tooltip-introduction/tooltip-introduction.module';
import { TooltipPositionModule } from './tooltip-position/tooltip-position.module';
import { TooltipContentModule } from './tooltip-content/tooltip-content.module';

const disable = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Components/Tooltip',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TooltipIntroductionModule,
        TooltipConfigurableModule,
        TooltipContentModule,
        TooltipPositionModule,
      ],
    }),
  ],
  argTypes: {
    placement: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-tooltip-introduction></sds-tooltip-introduction>',
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

export const Configurable: Story = (args) => ({
  template: '<sds-tooltip-configurable [placement]=placement [popper]=popper></sds-tooltip-configurable>',
  props: args,
});
Configurable.args = {
  popper: 'tooltip content',
};
Configurable.parameters = {
  actions: { disabled: true },
  preview: { disabled: true },
};

export const Position: Story = (args) => ({
  template: `<sds-tooltip-position></sds-tooltip-position>`,
  props: args,
});
Position.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/tooltip/tooltip-position', 'TooltipPositionModule', 'sds-tooltip-position'),
  stackblitzLink: generateStackblitzLink('tooltip', 'position'),
};

export const Content: Story = (args) => ({
  template: `<sds-tooltip-content></sds-tooltip-content>`,
  props: args,
});
Content.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/tooltip/tooltip-content', 'TooltipContentModule', 'sds-tooltip-content'),
  stackblitzLink: generateStackblitzLink('tooltip', 'content'),
};

export const __namedExportsOrder = ['Introduction', 'Configurable', 'Content', 'Position'];
