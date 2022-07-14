import { CommonModule } from '@angular/common';
import {
  ExternalLinkDirective,
  SdsExternalLinkDirectivesModule,
} from '@gsa-sam/components';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig } from 'libs/documentation/src/sandbox/sandbox-utils';
import { ExternalLinkHideIconModule } from './demos/external-link-hide-icon/external-link-hide-icon.module';
import { ExternalLinkTargetModule } from './demos/external-link-target/external-link-target.module';

declare var require: any;

export default {
  title: 'Example/External Link',
  component: ExternalLinkDirective,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SdsExternalLinkDirectivesModule,
        ExternalLinkTargetModule,
        ExternalLinkHideIconModule,
      ],
    }),
  ],
  args: {
    // href: 'https://Acquisition.gov',
    // target: '',
    // hideIcon: false,
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ExternalLinkDirective> = (
  args: ExternalLinkDirective
) => ({
  template: `
    <a class="usa-link" [attr.href]="'${args.href}'" [hideIcon]="hideIcon" [attr.target]="target">${args.href}</a>
  `,
  // props: args,
  props: {
    ...args,
    // href: 'Acquisition.gov',
    // target: '',
    // hideIcon: false,
  },
});

export const Configurable = Template.bind({ href: 'Acquisition.gov' });
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Configurable.args = {
  href: 'Acquisition.gov',
  target: '',
  hideIcon: false,
};

export const Target: Story = (args) => ({
  template: `<sds-external-link-target></sds-external-link-target>`,
  props: args,
});
Target.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'components/external-link/demos/external-link-target',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
};

export const HideIcon: Story = (args) => ({
  template: `<sds-external-link-hide-icon></sds-external-link-hide-icon>`,
  props: args,
});
HideIcon.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'components/external-link/demos/external-link-hide-icon',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
};
