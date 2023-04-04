import { CommonModule } from '@angular/common';
import { SdsDateModule, SdsDatePipe } from '@gsa-sam/components';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
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

const Template: Story<SdsDatePipe> = (args) => ({
  template: `
    <p>{{ today | sdsDate }}</p>
  `,
  props: args,
});
export const Configurable = Template.bind({});
Configurable.args = {
  today: Date.now(),
};
Configurable.parameters = {
  preview: { disabled: true },
  actions: { disabled: true },
};

export const CurrentDay: Story = (args) => ({
  template: `<sds-date-pipe-current-day></sds-date-pipe-current-day>`,
  props: args,
});
CurrentDay.parameters = {
  controls: {
    disabled: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/date-pipe/date-pipe-current-day',
    'DatePipeCurrentDayModule',
    'sds-date-pipe-current-day'
  ),
  stackblitzLink: generateStackblitzLink('date-pipe', 'current-day'),
};
export const CurrentYear: Story = (args) => ({
  template: `<sds-date-pipe-current-year></sds-date-pipe-current-year>`,
  props: args,
});
CurrentYear.parameters = {
  controls: {
    disabled: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/date-pipe/date-pipe-current-year',
    'DatePipeCurrentYearModule',
    'sds-date-pipe-current-year'
  ),
  stackblitzLink: generateStackblitzLink('date-pipe', 'current-year'),
};
export const NonCurrentYear: Story = (args) => ({
  template: `<sds-date-pipe-non-current-year></sds-date-pipe-non-current-year>`,
  props: args,
});
NonCurrentYear.parameters = {
  controls: {
    disabled: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/date-pipe/date-pipe-non-current-year',
    'DatePipePreviousYearModule',
    'sds-date-pipe-non-current-year'
  ),
  stackblitzLink: generateStackblitzLink('date-pipe', 'non-current-year'),
};

export const Introduction: Story = (args) => ({
  template: '<sds-date-pipe-introduction></sds-date-pipe-introduction>',
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

export const __namedExportsOrder = ['Introduction', 'Configurable', 'CurrentDay', 'CurrentYear', 'NonCurrentYear'];
