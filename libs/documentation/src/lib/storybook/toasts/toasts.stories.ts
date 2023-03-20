import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsToastSettings } from '@gsa-sam/components';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ToastsConfigurableModule } from './toasts-configurable/toasts-configurable.module';
import { ToastsIntroductionModule } from './toasts-introduction/toasts-introduction.module';
import { ToastsMessageModule } from './toasts-message/toasts-message.module';
import { ToastsPreventDuplicatesModule } from './toasts-prevent-duplicates/toasts-prevent-duplicates.module';
import { ToastsTimeoutModule } from './toasts-timeout/toasts-timeout.module';
import { ToastsTypeModule } from './toasts-type/toasts-type.module';

export default {
  title: 'Components/Toasts',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ToastrModule.forRoot(SdsToastSettings),
        NoopAnimationsModule,
        ToastsConfigurableModule,
        ToastsIntroductionModule,
        ToastsMessageModule,
        ToastsTimeoutModule,
        ToastsTypeModule,
        ToastsPreventDuplicatesModule,
      ],
    }),
  ],
  argTypes: {
    toastType: {
      options: ['General', 'Success', 'Info', 'Warning', 'Error'],
      control: { type: 'select' },
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'General' },
      },
    },
  },
} as Meta;

export const Introduction: Story = (args) => ({
  template: `<sds-toasts-introduction></sds-toasts-introduction>`,
  props: {
    ...args,
  },
  moduleMetadata: {
    providers: [{ provide: ToastrService, useClass: ToastrService }],
  },
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

export const Configurable: Story = (args) => ({
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
  preview: { disabled: true },
  actions: { disabled: true },
};

export const Message: Story = (args) => ({
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
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/toasts/toasts-message', 'ToastsMessageModule', 'sds-toasts-message'),
  stackblitzLink: generateStackblitzLink('toasts', 'message'),
};

export const Type: Story = (args) => ({
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
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/toasts/toasts-type', 'ToastsTypeModule', 'sds-toasts-type'),
  stackblitzLink: generateStackblitzLink('toasts', 'type'),
};

export const Timeout: Story = (args) => ({
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
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/toasts/toasts-timeout', 'ToastsTimeoutModule', 'sds-toasts-timeout'),
  stackblitzLink: generateStackblitzLink('toasts', 'timeout'),
};

export const PreventDuplicates: Story = (args) => ({
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
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/toasts/toasts-prevent-duplicates',
    'ToastsPreventDuplicatesModule',
    'sds-toasts-prevent-duplicates'
  ),
  stackblitzLink: generateStackblitzLink('toasts', 'prevent-duplicates'),
};

export const __namedExportsOrder = ['Introduction', 'Configurable', 'Message', 'PreventDuplicates', 'Timeout', 'Type'];
