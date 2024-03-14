import { CommonModule } from '@angular/common';
import { ExternalLinkDirective, SdsExternalLinkDirectivesModule } from '@gsa-sam/components';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { ExternalLinkHideIconModule } from './external-link-hide-icon/external-link-hide-icon.module';
import { ExternalLinkIntroductionModule } from './external-link-introduction/external-link-introduction.module';
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
      imports: [
        CommonModule,
        SdsExternalLinkDirectivesModule,
        ExternalLinkTargetModule,
        ExternalLinkHideIconModule,
        ExternalLinkIntroductionModule,
      ],
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

export const Configurable= (args) => ({
  template: `<a *ngIf="href" class="usa-link" href="{{href}}" [hideIcon]="hideIcon" target="{{target}}">{{href}}</a>`,
  args: {
    href: 'https://Acquisition.gov',
    target: '_blank',
    hideIcon: false,
  },
  props: args,
});
Configurable.parameters = {
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Target: StoryObj = (args) => ({
  template: `<sds-external-link-target></sds-external-link-target>`,
  props: args,
});
Target.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/external-link/external-link-target',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
  stackblitzLink: generateStackblitzLink('external-link', 'external-link-target'),
};

export const HideIcon: StoryObj = (args) => ({
  template: `<sds-external-link-hide-icon></sds-external-link-hide-icon>`,
  props: args,
});
HideIcon.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/external-link/external-link-hide-icon',
    'ButtonGroupBasicModule',
    'sds-button-group-demo'
  ),
  stackblitzLink: generateStackblitzLink('external-link', 'external-link-hide-icon'),
};

export const Introduction: StoryObj = (args) => ({
  template: '<sds-external-link-introduction></sds-external-link-introduction>',
  props: args,
});
Introduction.parameters = {
  options: { showPanel: false },
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

// export const __namedExportsOrder = ['Introduction', 'Configurable', 'HideIcon', 'Target'];
