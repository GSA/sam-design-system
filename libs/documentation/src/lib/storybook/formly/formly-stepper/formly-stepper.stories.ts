import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import {
  createCodePreviewTabData,
  generateConfig,
  generateStackblitzLink,
} from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyStepperIntroductionModule } from './formly-stepper-introduction/formly-stepper-introduction.module';
import { FormlyStepperBasicModule } from './formly-stepper-basic/formly-stepper-basic.module';
import { FormlyStepperAdvancedModule } from './formly-stepper-advanced/stepper-advanced.module';
import { UswdsStepperModule } from './formly-stepper-uswds/uswds-stepper.module';
import { SdsStepper } from '@gsa-sam/sam-formly';
import { RouterTestingModule } from '@angular/router/testing';

const templateOptions = {
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
        FormlyModule.forRoot(),
        FormlyStepperIntroductionModule,
        NoopAnimationsModule,
        FormlyStepperBasicModule,
        FormlyStepperIntroductionModule,
        RouterTestingModule,
        FormlyStepperAdvancedModule,
        UswdsStepperModule,
      ],
      providers: [SdsStepper],
    }),
  ],
  argTypes: {
    label: templateOptions,
    placeholder: templateOptions,
    description: templateOptions,
    required: templateOptions,
    disabled: templateOptions,
    tooltipText: templateOptions,
  },
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-formly-stepper-introduction></sds-formly-stepper-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Uneven: Story = (args) => ({
  template: '<sds-formly-stepper-basic></sds-formly-stepper-basic>',
  props: args,
});
Uneven.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-stepper/formly-stepper-basic',
    'FormlyStepperBasicModule',
    'sds-formly-stepper-basic',
    [
      createCodePreviewTabData('storybook/formly/formly-stepper/formly-stepper-basic/formly-stepper-basic-uneven.component.ts', 'ts', false),
      createCodePreviewTabData('storybook/formly/formly-stepper/formly-stepper-basic/formly-stepper-basic-uneven.component.html', 'html', false),
    ]
  ),
  stackblitzLink: generateStackblitzLink('formly-stepper', 'uneven'),
};

export const USWDS: Story = (args) => ({
  template: '<gsa-sam-uswds-stepper></gsa-sam-uswds-stepper>',
  props: args,
});
USWDS.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-stepper/formly-stepper-basic',
    'FormlyStepperBasicModule',
    'sds-formly-stepper-basic',
    [
      createCodePreviewTabData('storybook/formly/formly-stepper/formly-stepper-uswds/uswds-custom-stepper.component.ts', 'ts', false),
      createCodePreviewTabData('storybook/formly/formly-stepper/formly-stepper-uswds/uswds-custom-stepper.component.html', 'html', false),
    ]
  ),
  stackblitzLink: generateStackblitzLink('formly-stepper', 'uswds'),
};

export const Advanced: Story = (args) => ({
  template: '<stepper-advanced-demo></stepper-advanced-demo>',
  props: args,
});
Advanced.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-stepper/formly-stepper-basic',
    'FormlyStepperAdvancedModule',
    'stepper-advanced-demo',
    [
      createCodePreviewTabData('storybook/formly/formly-stepper/formly-stepper-advanced/custom-stepper.component.ts', 'ts', false),
      createCodePreviewTabData('storybook/formly/formly-stepper/formly-stepper-advanced/custom-stepper.component.html', 'html', false),
      createCodePreviewTabData('storybook/formly/formly-stepper/formly-stepper-advanced/subawardee.component.ts', 'ts', false),
      createCodePreviewTabData('storybook/formly/formly-stepper/formly-stepper-advanced/subawardee.component.html', 'html', false),
    ]
  ),
  stackblitzLink: generateStackblitzLink('formly-stepper', 'Advanced'),
};

export const __namedExportsOrder = ['Introduction', 'Uneven', 'USWDS', 'Advanced'];
