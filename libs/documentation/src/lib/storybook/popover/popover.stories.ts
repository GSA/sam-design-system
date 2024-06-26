import { CommonModule } from '@angular/common';
import { SdsPopoverModule } from '@gsa-sam/components';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { PopoverIntroductionModule } from './popover-introduction/popover-introduction.module';
import { PopoverPositionModule } from './popover-position/popover-position.module';
import { PopoverTitleModule } from './popover-title/popover-title.module';
import { PopoverCloseBehaviorModule } from './popover-close-behavior/popover-close-behavior.module';

const disable = {
  table: {
    disable: true,
  },
};
export default {
  title: 'Components/Popover',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SdsPopoverModule,
        PopoverPositionModule,
        PopoverTitleModule,
        PopoverIntroductionModule,
        PopoverCloseBehaviorModule,
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

export const Configurable = (args) => ({
  template: `
      <div class="padding-4" *ngIf="sdsPopover">
      <button class="usa-button usa-button--base"
        [sdsPopover]="sdsPopover"
        [sdsPopoverTitle]="sdsPopoverTitle"
        [position]="position"
      >
        I'm a popover!
      </button>
      </div>
    `,
  props: args,
});
Configurable.args = {
  sdsPopover: 'Default Body',
  sdsPopoverTitle: '',
  position: 'top',
};
Configurable.parameters = {
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Position: StoryObj = (args) => ({
  template: `<sds-popover-position></sds-popover-position>`,
  props: args,
});
Position.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/popover/popover-position', 'PopoverPositionModule', 'sds-popover-position'),
  stackblitzLink: generateStackblitzLink('popover', 'position'),
};

export const Title: StoryObj = (args) => ({
  template: `<popover-title></popover-title>`,
  props: args,
});
Title.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/popover/popover-title',
    'PopoverSdsPopoverTitleModule',
    'sds-popover-sds-popover-title'
  ),
  stackblitzLink: generateStackblitzLink('popover', 'title'),
};

export const CloseBehavior: StoryObj = (args) => ({
  template: `<sds-popover-close-behavior></sds-popover-close-behavior>`,
  props: args,
});
CloseBehavior.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/popover/popover-close-behavior',
    'PopoverCloseBehaviorModule',
    'sds-popover-close-behavior'
  ),
  stackblitzLink: generateStackblitzLink('popover', 'close-on-content-click'),
};
export const Introduction: StoryObj = (args) => ({
  template: '<sds-popover-introduction></sds-popover-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};
