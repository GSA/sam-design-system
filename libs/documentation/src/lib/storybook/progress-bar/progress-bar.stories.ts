import { CommonModule } from '@angular/common';
import { SdsProgressBarComponent, SdsProgressBarModule } from '@gsa-sam/components';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { ProgressBarBasicModule } from './progress-bar-basic/progress-bar-basic.module';
import { ProgressBarIntroductionModule } from './progress-bar-introduction/progress-bar-introduction.module';

const disable = {
  table: {
    disable: true,
  },
};
export default {
  title: 'Components/Progress Bar',
  component: SdsProgressBarComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SdsProgressBarModule, ProgressBarBasicModule, ProgressBarIntroductionModule],
    }),
  ],
} as Meta;

export const Configurable = ({ progress, topBorder }) => {
  return {
    template: `
      <sds-progress-bar
        [progress]="progress"
        [topBorder]="topBorder"
      ></sds-progress-bar>
    `,
    props: {
      progress,
      topBorder,
    },
  };
};
Configurable.args = {
  topBorder: false,
  progress: 10,
};
Configurable.parameters = {
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Basic: StoryObj = (args) => ({
  template: `<sds-progress-bar-basic></sds-progress-bar-basic>`,
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/progress-bar/progress-bar-basic',
    'ProgressBarBasicModule',
    'sds-progress-bar-basic',
  ),
  stackblitzLink: generateStackblitzLink('progress-bar', 'basic'),
};

export const Introduction: StoryObj = (args) => ({
  template: '<sds-progress-bar-introduction></sds-progress-bar-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};
