import { CommonModule } from '@angular/common';
import { ExternalLinkDirective, SdsExternalLinkDirectivesModule } from '@gsa-sam/components';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { ExternalLinkHideIconModule } from './external-link-hide-icon/external-link-hide-icon.module';
import { ExternalLinkTargetModule } from './external-link-target/external-link-target.module';

const disable = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Components/External Link',
  component: ExternalLinkDirective,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SdsExternalLinkDirectivesModule, ExternalLinkTargetModule, ExternalLinkHideIconModule],
    }),
  ],
  argTypes: {
    emailLinkKeyword: disable,
    hrefAttr: disable,
    internalLinks: disable,
    relAttr: disable,
    targetAttr: disable,
    _getAriaLabel: disable,
    createIcon: disable,
    ngOnChanges: disable,
  },
} as Meta;

const Template: Story<ExternalLinkDirective> = (args: ExternalLinkDirective) => ({
  template: `<a *ngIf="href" class="usa-link" href="{{href}}" [hideIcon]="hideIcon" target="{{target}}">{{href}}</a>`,
  props: args,
});

export const Configurable = Template.bind({});
Configurable.args = {
  href: 'https://Acquisition.gov',
  target: '_blank',
  hideIcon: false,
};
Configurable.parameters = {
  actions: { disabled: true },
  preview: { disabled: true },
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
    'storybook/external-link/external-link-target',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
  stackblitzLink: generateStackblitzLink('external-link', 'external-link-target'),
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
    'storybook/external-link/external-link-hide-icon',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
  stackblitzLink: generateStackblitzLink('external-link', 'external-link-hide-icon'),
};

export const __namedExportsOrder = ['Configurable', 'HideIcon', 'Target'];