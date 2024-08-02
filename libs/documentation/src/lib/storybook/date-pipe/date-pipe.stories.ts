import { CommonModule } from '@angular/common';
import { SdsDateModule, SdsDatePipe } from '@gsa-sam/components';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { DatePipeCurrentDayModule } from './date-pipe-current-day/date-pipe-current-day.module';
import { DatePipeCurrentYearModule } from './date-pipe-current-year/date-pipe-current-year.module';
import { DatePipeIntroductionModule } from './date-pipe-introduction/date-pipe-introduction.module';
import { DatePipeNonCurrentYearModule } from './date-pipe-non-current-year/date-pipe-non-current-year.module';

const disable = {
  table: {
    disable: true,
  },
};
export default {
  title: 'Components/Date Pipe',
  component: SdsDatePipe,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SdsDateModule,
        DatePipeCurrentDayModule,
        DatePipeCurrentYearModule,
        DatePipeNonCurrentYearModule,
        DatePipeIntroductionModule,
      ],
    }),
  ],
  argTypes: {
    transform: disable,
    today: {
      control: 'date',
    },
  },
} as Meta;

export const Configurable: StoryObj = (args) => ({
  template: `<p>{{ today | sdsDate }}</p>`,
  props: args,
});
Configurable.args = {
  today: Date.now(),
};
Configurable.parameters = {
  sdsCodePreview: { disable: true },
  actions: { disable: true },
};

export const CurrentDay: StoryObj = (args) => ({
  template: `<sds-date-pipe-current-day></sds-date-pipe-current-day>`,
  props: args,
});
CurrentDay.parameters = {
  controls: {
    disable: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/date-pipe/date-pipe-current-day',
    'DatePipeCurrentDayModule',
    'sds-date-pipe-current-day',
  ),
  stackblitzLink: generateStackblitzLink('date-pipe', 'current-day'),
};
export const CurrentYear: StoryObj = (args) => ({
  template: `<sds-date-pipe-current-year></sds-date-pipe-current-year>`,
  props: args,
});
CurrentYear.parameters = {
  controls: {
    disable: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/date-pipe/date-pipe-current-year',
    'DatePipeCurrentYearModule',
    'sds-date-pipe-current-year',
  ),
  stackblitzLink: generateStackblitzLink('date-pipe', 'current-year'),
};
export const NonCurrentYear: StoryObj = (args) => ({
  template: `<sds-date-pipe-non-current-year></sds-date-pipe-non-current-year>`,
  props: args,
});
NonCurrentYear.parameters = {
  controls: {
    disable: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/date-pipe/date-pipe-non-current-year',
    'DatePipePreviousYearModule',
    'sds-date-pipe-non-current-year',
  ),
  stackblitzLink: generateStackblitzLink('date-pipe', 'non-current-year'),
};

export const Introduction: StoryObj = (args) => ({
  template: '<sds-date-pipe-introduction></sds-date-pipe-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};
