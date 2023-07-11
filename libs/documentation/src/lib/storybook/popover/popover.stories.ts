import { CommonModule } from '@angular/common';
import { SdsPopoverDirective, SdsPopoverModule } from '@gsa-sam/components';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { PopoverIntroductionModule } from './popover-introduction/popover-introduction.module';
import { PopoverPositionModule } from './popover-position/popover-position.module';
import { PopoverCloseModule } from './popover-close/popover-close.module';
import { PopoverConfigurableModule } from './popover-configurable/popover-configurable.module';
import { PopoverContentModule } from './popover-content/popover-content.module';

export default {
  title: 'Components/Popover',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SdsPopoverModule,
        PopoverPositionModule,
        PopoverIntroductionModule,
        PopoverCloseModule,
        PopoverConfigurableModule,
        PopoverContentModule
      ],
    }),
  ],
  argTypes: {
    placement: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<SdsPopoverDirective> = (args: SdsPopoverDirective) => {
  return {
    template: `<sds-popover-configurable
      [placement]=placement
      [popper]=popper
      [hideOnClickOutside]=hideOnClickOutside
      ></sds-popover-configurable>`,
    props: args,
  };
};

export const Configurable = Template.bind({});
Configurable.args = {
  popper: 'Popover Content',
  placement: 'top',
  hideOnClickOutside: false
};
Configurable.parameters = {
  actions: { disabled: true },
  preview: { disabled: true },
};

export const Position: Story = (args) => ({
  template: `<sds-popover-position></sds-popover-position>`,
  props: args,
});
Position.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/popover/popover-position', 'PopoverPositionModule', 'sds-popover-position'),
  stackblitzLink: generateStackblitzLink('popover', 'position'),
};

export const Close: Story = (args) => ({
  template: `<sds-popover-close></sds-popover-close>`,
  props: args,
});
Close.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/popover/popover-close',
    'PopoverClose',
    'sds-popover-close'
  ),
  stackblitzLink: generateStackblitzLink('popover', 'close'),
};

export const Content: Story = (args) => ({
  template: `<sds-popover-content></sds-popover-content>`,
  props: args,
});
Content.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/popover/popover-content',
    'PopoverContent',
    'sds-popover-content'
  ),
  stackblitzLink: generateStackblitzLink('popover', 'content'),
};
export const Introduction: Story = (args) => ({
  template: '<sds-popover-introduction></sds-popover-introduction>',
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

export const __namedExportsOrder = [
  'Introduction',
  'Configurable',
  'Close',
  'Content',
  'Position',
  'Title',
];
