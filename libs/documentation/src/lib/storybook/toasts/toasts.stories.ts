import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsToastModule, SdsToastSettings } from '@gsa-sam/components';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ToastsConfigurableModule } from './toasts-configurable/toasts-configurable.module';
import { ToastsIntroductionModule } from './toasts-introduction/toasts-introduction.module';
import { ToastsMessageModule } from './toasts-message/toasts-message.module';
import { ToastsPreventDuplicatesModule } from './toasts-prevent-duplicates/toasts-prevent-duplicates.module';
import { ToastsTimeoutModule } from './toasts-timeout/toasts-timeout.module';
import { ToastsTypeModule } from './toasts-type/toasts-type.module';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Components/Toasts',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SdsToastModule,
        ToastrModule.forRoot(SdsToastSettings),
        ToastsConfigurableModule,
        ToastsIntroductionModule,
        ToastsMessageModule,
        ToastsTimeoutModule,
        ToastsTypeModule,
        ToastsPreventDuplicatesModule,
      ],
    }),
    applicationConfig({
      providers: [importProvidersFrom(SdsToastModule), provideAnimations()],
    }),
  ],
  argTypes: {
    toastType: {
      options: ['Success', 'Info', 'Warning', 'Error'],
      control: { type: 'select' },
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'General' },
      },
    },
  },
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: `<sds-toasts-introduction></sds-toasts-introduction>`,
  props: {
    ...args,
  },
  moduleMetadata: {
    providers: [{ provide: ToastrService, useClass: ToastrService }],
  },
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Configurable: StoryObj = (args) => ({
  template: `<sds-toasts-configurable
  [toastType]="toastType"
  [toastMessage]="toastMessage"
  [toastTimeout]="toastTimeout"
  [disableTimeout]=timeoutDisabled
  [preventDuplicates]=preventDuplicates
  ></sds-toasts-configurable>`,
  props: {
    ...args,
  },
  moduleMetadata: {
    providers: [{ provide: ToastrService, useClass: ToastrService }],
  },
});
Configurable.args = {
  toastMessage: 'Test Message',
  toastTimeout: 5000,
  timeoutDisabled: false,
  preventDuplicates: false,
};
Configurable.parameters = {
  sdsCodePreview: { disable: true },
  actions: { disable: true },
};

export const Message: StoryObj = (args) => ({
  template: `<sds-toasts-message></sds-toasts-message>`,
  props: {
    ...args,
  },
  moduleMetadata: {
    providers: [{ provide: ToastrService, useClass: ToastrService }],
  },
});
Message.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/toasts/toasts-message', 'ToastsMessageModule', 'sds-toasts-message'),
  stackblitzLink: generateStackblitzLink('toasts', 'message'),
};

export const Type: StoryObj = (args) => ({
  template: `<sds-toasts-type></sds-toasts-type>`,
  props: {
    ...args,
  },
  moduleMetadata: {
    providers: [{ provide: ToastrService, useClass: ToastrService }],
  },
});
Type.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/toasts/toasts-type', 'ToastsTypeModule', 'sds-toasts-type'),
  stackblitzLink: generateStackblitzLink('toasts', 'type'),
};

export const Timeout: StoryObj = (args) => ({
  template: `<sds-toasts-timeout></sds-toasts-timeout>`,
  props: {
    ...args,
  },
  moduleMetadata: {
    providers: [{ provide: ToastrService, useClass: ToastrService }],
  },
});
Timeout.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/toasts/toasts-timeout', 'ToastsTimeoutModule', 'sds-toasts-timeout'),
  stackblitzLink: generateStackblitzLink('toasts', 'timeout'),
};

export const PreventDuplicates: StoryObj = (args) => ({
  template: `<sds-toasts-prevent-duplicates></sds-toasts-prevent-duplicates>`,
  props: {
    ...args,
  },
  moduleMetadata: {
    providers: [{ provide: ToastrService, useClass: ToastrService }],
  },
});
PreventDuplicates.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/toasts/toasts-prevent-duplicates',
    'ToastsPreventDuplicatesModule',
    'sds-toasts-prevent-duplicates',
  ),
  stackblitzLink: generateStackblitzLink('toasts', 'prevent-duplicates'),
};
