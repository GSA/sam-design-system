import { CommonModule } from '@angular/common';
import {
  ExternalLinkDirective,
  SdsExternalLinkDirectivesModule,
} from '@gsa-sam/components';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { ExternalLinkModule } from './external-link.module';

declare var require: any;

const hrefDemoTemplate = require('!!raw-loader!./demos/href/external-link-href.component.html');
const targetDemoTemplate = require('!!raw-loader!./demos/target/external-link-target.component.html');
const hideIconDemoTemplate = require('!!raw-loader!./demos/hide-icon/external-link-hide-icon.component.html');

export default {
  title: 'Example/External Link',
  component: ExternalLinkDirective,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SdsExternalLinkDirectivesModule],
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

export const Href: Story = (args) => ({
  template: hrefDemoTemplate,
});
Href.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
};

export const Target: Story = (args) => ({
  template: targetDemoTemplate,
});
Target.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
};

export const HideIcon: Story = (args) => ({
  template: hideIconDemoTemplate,
});
HideIcon.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
};
