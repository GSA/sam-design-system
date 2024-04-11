import { CommonModule } from '@angular/common';
import { CollapseDirective, SdsCollapseModule } from '@gsa-sam/components';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { CollapseBasicModule } from './collapse-basic/collapse-basic.module';
import { CollapseIntroductionModule } from './collapse-introduction/collapse-introduction.module';

const disable = {
  table: {
    disable: true,
  },
};
export default {
  title: 'Components/Collapse',
  component: CollapseDirective,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SdsCollapseModule, CollapseBasicModule, CollapseIntroductionModule],
    }),
  ],
  argTypes: {
    collapsed: {
      control: 'boolean',
    },
  },
} as Meta;

export const Basic: StoryObj = (args) => ({
  template: `<sds-collapse-basic></sds-collapse-basic>`,
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/collapse/collapse-basic', 'CollapseBasicModule', 'sds-collapse-basic'),
  stackblitzLink: generateStackblitzLink('collapse', 'basic'),
};

export const Introduction: StoryObj = (args) => ({
  template: '<sds-collapse-introduction></sds-collapse-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};
