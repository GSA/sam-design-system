import { CommonModule } from '@angular/common';
import {
  SdsPopoverDirective,
  SdsPopoverModule,
  SdsTooltipModule,
} from '@gsa-sam/components';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, Story } from '@storybook/angular';

declare var require: any;

const positionDemoTemplate = require('!!raw-loader!./demos/position/popover-position.component.html');
const closeOnClickOutsideDemoTemplate = require('!!raw-loader!./demos/close-on-click-outside/popover-close-on-click-outside.component.html');
const closeOnContentClickDemoTemplate = require('!!raw-loader!./demos/close-on-content-click/popover-close-on-content-click.component.html');
const sdsPopoverTitleDemoTemplate = require('!!raw-loader!./demos/sds-popover-title/popover-sds-popover-title.component.html');

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Popover',
  component: SdsPopoverDirective,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SdsPopoverModule, SdsTooltipModule],
    }),
  ],
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<SdsPopoverDirective> = (args: SdsPopoverDirective) => ({
  template: '',
  props: args,
});

export const Position: Story = (args) => ({
  template: positionDemoTemplate,
});
Position.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
};

export const Title: Story = (args) => ({
  template: sdsPopoverTitleDemoTemplate,
});
Title.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
};

export const CloseOnContentClicked: Story = (args) => ({
  template: closeOnContentClickDemoTemplate,
});
CloseOnContentClicked.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
};

export const CloseOnClickOutside: Story = (args) => ({
  template: closeOnClickOutsideDemoTemplate,
});
CloseOnClickOutside.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
};
