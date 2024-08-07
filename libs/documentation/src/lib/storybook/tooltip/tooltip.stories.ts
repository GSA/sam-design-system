import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { TooltipConfigurableModule } from './tooltip-configurable/tooltip-configurable.module';
import { TooltipIntroductionModule } from './tooltip-introduction/tooltip-introduction.module';
import { TooltipPositionModule } from './tooltip-position/tooltip-position.module';
import { TooltipSdsTooltipModule } from './tooltip-sdsTooltip/tooltip-sdsTooltip.module';

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
        TooltipSdsTooltipModule,
        TooltipPositionModule,
      ],
    }),
  ],
  argTypes: {
    _sdsTooltip: disable,
    _tooltipShowing: disable,
    sdsTooltipDiv: disable,
    hideTooltip: disable,
    ngAfterViewInit: disable,
    onBlur: disable,
    onFocus: disable,
    onKeyUp: disable,
    onMouseEnter: disable,
    onMouseLeave: disable,
    showTooltip: disable,
    clearAndReplacePosition: disable,
    clearAndReplaceTooltipContent: disable,
    ngOnChanges: disable,
    position: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'select' },
    },
  },
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-tooltip-introduction></sds-tooltip-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Configurable: StoryObj = (args) => ({
  template: '<sds-tooltip-configurable [position]=position [tooltipContent]=sdsTooltip></sds-tooltip-configurable>',
  props: args,
});
Configurable.args = {
  sdsTooltip: 'tooltip content',
};
Configurable.parameters = {
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Position: StoryObj = (args) => ({
  template: `<sds-tooltip-position></sds-tooltip-position>`,
  props: args,
});
Position.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/tooltip/tooltip-position', 'TooltipPositionModule', 'sds-tooltip-position'),
  stackblitzLink: generateStackblitzLink('tooltip', 'position'),
};

export const SdsTooltip: StoryObj = (args) => ({
  template: `<sds-tooltip-sdsTooltip></sds-tooltip-sdsTooltip>`,
  props: args,
});
SdsTooltip.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/tooltip/tooltip-sdsTooltip', 'TooltipSdsTooltipModule', 'sds-tooltip-sdsTooltip'),
  stackblitzLink: generateStackblitzLink('tooltip', 'sdsTooltip'),
};
