import { CommonModule } from '@angular/common';
import { SdsPopoverDirective, SdsPopoverModule } from '@gsa-sam/components';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { PopoverCloseOnClickOutsideModule } from './popover-close-on-click-outside/popover-close-on-click-outside.module';
import { PopoverCloseOnContentClickModule } from './popover-close-on-content-click/popover-close-on-content-click.module';
import { PopoverIntroductionModule } from './popover-introduction/popover-introduction.module';
import { PopoverPositionModule } from './popover-position/popover-position.module';
import { PopoverTitleModule } from './popover-title/popover-title.module';

const disable = {
  table: {
    disable: true,
  },
};
export default {
  title: 'Components/Popover',
  component: SdsPopoverDirective,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SdsPopoverModule,
        PopoverCloseOnClickOutsideModule,
        PopoverPositionModule,
        PopoverCloseOnContentClickModule,
        PopoverTitleModule,
        PopoverIntroductionModule,
      ],
    }),
  ],
  argTypes: {
    position: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'radio' },
    },
    _sdsPopoverContent: disable,
    _sdsPopoverTitle: disable,
    popoverDivId: disable,
    popoverVisible: disable,
    sdsPopoverDiv: disable,
    clickEvent: disable,
    clickout: disable,
    handlePopoverContent: disable,
    handlePopoverSection: disable,
    handlePopoverTitle: disable,
    handlePosition: disable,
    hidePopover: disable,
    ngAfterViewInit: disable,
    ngOnChanges: disable,
    onChangesPositionUpdate: disable,
    onChangesSdsPopoverTitleUpdate: disable,
    onChangesSdsPopoverUpdate: disable,
    onClick: disable,
    onEscape: disable,
    onKeySpace: disable,
    onKeyUp: disable,
  },
} as Meta;

const exportedStories = {};

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
  sdsPopoverTitle: '',
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

export const Title: Story = (args) => ({
  template: `<popover-title></popover-title>`,
  props: args,
});
Title.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/popover/popover-title',
    'PopoverSdsPopoverTitleModule',
    'sds-popover-sds-popover-title'
  ),
  stackblitzLink: generateStackblitzLink('popover', 'title'),
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
    'storybook/popover/popover-close-on-content-click',
    'PopoverCloseOnContentClickModule',
    'sds-popover-close-on-content-click'
  ),
  stackblitzLink: generateStackblitzLink('popover', 'close-on-content-click'),
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
    'storybook/popover/popover-close-on-click-outside',
    'PopoverCloseOnClickOutsideModule',
    'sds-popover-close-on-click-outside'
  ),
  stackblitzLink: generateStackblitzLink('popover', 'close-on-click-outside'),
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
  'CloseOnClickOutside',
  'CloseOnContentClicked',
  'Title',
  'Position',
];
