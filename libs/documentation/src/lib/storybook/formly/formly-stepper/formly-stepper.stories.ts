import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import {
  createCodePreviewTabData,
  generateConfig,
  generateStackblitzLink,
} from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyStepperIntroductionModule } from './formly-stepper-introduction/formly-stepper-introduction.module';
import { FormlyStepperBasicModule } from './formly-stepper-basic/formly-stepper-basic.module';
import { FormlyStepperAdvancedModule } from './formly-stepper-advanced/formly-stepper-advanced.module';
import { UswdsStepperModule } from './formly-stepper-uswds/formly-stepper-uswds.module';
import { importProvidersFrom } from '@angular/core';

const props = {
  table: {
    category: 'template-options',
  },
};

export default {
  title: 'Formly/Stepper',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyStepperIntroductionModule,
        FormlyStepperBasicModule,
        FormlyStepperAdvancedModule,
        UswdsStepperModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(FormlyModule.forRoot())],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-stepper-introduction></sds-formly-stepper-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Uneven: StoryObj = (args) => ({
  template: '<sds-formly-stepper-basic></sds-formly-stepper-basic>',
  props: args,
});
Uneven.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-stepper/formly-stepper-basic',
    'FormlyStepperBasicModule',
    'sds-formly-stepper-basic',
    [
      createCodePreviewTabData(
        'storybook/formly/formly-stepper/formly-stepper-basic/formly-stepper-basic-uneven.component.ts',
        'ts',
        false,
      ),
      createCodePreviewTabData(
        'storybook/formly/formly-stepper/formly-stepper-basic/formly-stepper-basic-uneven.component.html',
        'html',
        false,
      ),
    ],
  ),
  stackblitzLink: generateStackblitzLink('formly-stepper', 'basic'),
};

export const USWDS: StoryObj = (args) => ({
  template: '<gsa-sam-uswds-stepper></gsa-sam-uswds-stepper>',
  props: args,
});
USWDS.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-stepper/formly-stepper-uswds',
    'UswdsStepperModule',
    'gsa-sam-uswds-stepper',
    [
      createCodePreviewTabData(
        'storybook/formly/formly-stepper/formly-stepper-uswds/formly-stepper-uswds-custom.component.ts',
        'ts',
        false,
      ),
      createCodePreviewTabData(
        'storybook/formly/formly-stepper/formly-stepper-uswds/formly-stepper-uswds-custom.component.html',
        'html',
        false,
      ),
    ],
  ),
  stackblitzLink: generateStackblitzLink('formly-stepper', 'uswds'),
};

export const Advanced: StoryObj = (args) => ({
  template: '<stepper-advanced-demo></stepper-advanced-demo>',
  props: args,
});
Advanced.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-stepper/formly-stepper-advanced',
    'FormlyStepperAdvancedModule',
    'stepper-advanced-demo',
    [
      createCodePreviewTabData(
        'storybook/formly/formly-stepper/formly-stepper-advanced/custom-stepper.component.ts',
        'ts',
        false,
      ),
      createCodePreviewTabData(
        'storybook/formly/formly-stepper/formly-stepper-advanced/custom-stepper.component.html',
        'html',
        false,
      ),
      createCodePreviewTabData(
        'storybook/formly/formly-stepper/formly-stepper-advanced/subawardee.component.ts',
        'ts',
        false,
      ),
      createCodePreviewTabData(
        'storybook/formly/formly-stepper/formly-stepper-advanced/subawardee.component.html',
        'html',
        false,
      ),
    ],
  ),
  stackblitzLink: generateStackblitzLink('formly-stepper', 'advanced'),
};
