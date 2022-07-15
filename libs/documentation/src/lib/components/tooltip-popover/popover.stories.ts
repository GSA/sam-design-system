import { CommonModule } from '@angular/common';
import {
  SdsPopoverDirective,
  SdsPopoverModule,
  SdsTooltipModule,
} from '@gsa-sam/components';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, Story, forceReRender } from '@storybook/angular';
import { generateConfig } from 'libs/documentation/src/sandbox/sandbox-utils';
import { PopoverCloseOnClickOutsideModule } from './demos/popover-close-on-click-outside/popover-close-on-click-outside.module';
import { PopoverCloseOnContentClickModule } from './demos/popover-close-on-content-click/popover-close-on-content-click.module';
import { PopoverPositionModule } from './demos/popover-position/popover-position.module';
import { PopoverSdsPopoverTitleModule } from './demos/popover-sds-popover-title/popover-sds-popover-title.module';

declare var require: any;

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Popover',
  component: SdsPopoverDirective,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SdsPopoverModule,
        PopoverCloseOnClickOutsideModule,
        PopoverPositionModule,
        PopoverCloseOnContentClickModule,
        PopoverSdsPopoverTitleModule,
      ],
    }),
  ],
  argTypes: {
    position: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'radio' },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SdsPopoverDirective> = (args: SdsPopoverDirective) => {
  return {
    template: `
      <div class="padding-4" *ngIf="sdsPopover">
      <button class="usa-button usa-button--base"
        [sdsPopover]="sdsPopover"
        [sdsPopoverTitle]="sdsPopoverTitle"
        [position]="position"
        [closeOnContentClick]=closeOnContentClick
        [closeOnClickOutside]=closeOnClickOutside
      >
        I'm a popover!
      </button>
      </div>
    `,
    props: args,
  };
};

export const Configurable = Template.bind({});
Configurable.args = {
  sdsPopover: 'Default Body',
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
  preview: generateConfig(
    'components/tooltip-popover/demos/popover-position',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
};

export const Title: Story = (args) => ({
  template: `<sds-popover-sds-popover-title></sds-popover-sds-popover-title>`,
  props: args,
});
Title.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'components/tooltip-popover/demos/popover-sds-popover-title',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
};

export const CloseOnContentClicked: Story = (args) => ({
  template: `<sds-popover-close-on-content-click></sds-popover-close-on-content-click>`,
  props: args,
});
CloseOnContentClicked.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'components/tooltip-popover/demos/popover-close-on-content-click',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
};

export const CloseOnClickOutside: Story = (args) => ({
  template: `<sds-popover-close-on-click-outside></sds-popover-close-on-click-outside>`,
  props: args,
});
CloseOnClickOutside.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'components/tooltip-popover/demos/popover-close-on-click-outside',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
};
