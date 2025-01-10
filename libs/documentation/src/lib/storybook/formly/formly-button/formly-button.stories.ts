import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyButtonIntroductionModule } from './formly-button-introduction/formly-button-introduction.module';
import { FormlyButtonBasicModule } from './formly-button-basic/formly-button-basic.module';
import { FormlyButtonOptionsModule } from './formly-button-options/formly-button-options.module';
import { importProvidersFrom } from '@angular/core';
import { FormlyButtonConfigurableModule } from './formly-button-configurable/formly-button-configurable.module';

export default {
  title: 'Formly/Button',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyButtonIntroductionModule,
        FormlyButtonOptionsModule,
        FormlyButtonBasicModule,
        FormlyButtonIntroductionModule,
        FormlyButtonConfigurableModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(FormlyModule.forRoot())],
    }),
  ],
  argTypes: {
    hasModel: {
      table: {
        category: 'Model',
      },
      control: {
        type: 'boolean',
      },
    },
    btnIcon: {
      options: ['', 'plus-circle', 'info', 'info-circle'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-button-introduction></sds-formly-button-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Options: StoryObj = (args) => ({
  template: '<sds-formly-button-options></sds-formly-button-options>',
  props: args,
});
Options.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-button/formly-button-options',
    'FormlyButtonOptionsModule',
    'sds-formly-button-options'
  ),
  stackblitzLink: generateStackblitzLink('formly-button', 'options'),
};

export const Basic: StoryObj = (args) => ({
  template: '<sds-formly-button-basic></sds-formly-button-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-button/formly-button-basic',
    'FormlyButtonBasicModule',
    'sds-formly-button-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-button', 'basic'),
};

const formlyConfigFunction = (text: string, enableInput: boolean, btnClass: string, btnIcon: string) => {
  return {
    text: text ?? '',
    enableInput: enableInput ?? '',
    btnClass: btnClass ?? '',
    btnIcon: btnIcon ?? '',
  };
};

export const Configurable = (args) => {
  const { text, enableInput, btnClass, btnIcon } = args;

  const hasModel = args.hasModel;
  let config = formlyConfigFunction(text, enableInput, btnClass, btnIcon);
  return {
    template:
      '<sds-formly-button-configurable [hasModel]="hasModel" [config]="configObj"></sds-formly-button-configurable>',
    props: {
      hasModel: hasModel,
      configObj: config,
      ...args,
    },
  };
};
Configurable.args = {
  text: 'Search',
  enableInput: false,
  btnClass: '',
  btnIcon: '',
  hasModel: false,
};
Configurable.parameters = {
  sdsCodePreview: { disable: true },
};
