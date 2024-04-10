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
import { FormlyFilterBasicModule } from './formly-filter-basic/formly-filter-basic.module';
import { FormlyFilterSingleModule } from './formly-filter-single/formly-filter-single.module';
import { FormlyFilterIntroductionModule } from './formly-filter-introduction/formly-filter-introduction.module';
import { FormlyFilterAccordionGroupModule } from './formly-filter-accordiongroup/formly-filter-accordiongroup.module';
import { FormlyFilterHideExpressionModule } from './formly-filter-hideexpression/formly-filter-hideexpression.module';
import { FormlyFilterNestedModule } from './formly-filter-nested/formly-filter-nested.module';
import { FormlyFilterHorizontalModule } from './formly-filter-horizontal/formly-filter-horizontal.module';
import { importProvidersFrom } from '@angular/core';

const props = {
  table: {
    category: 'template-options',
  },
};

export default {
  title: 'Formly/Filter',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyFilterIntroductionModule,
        FormlyFilterAccordionGroupModule,
        FormlyFilterBasicModule,
        FormlyFilterSingleModule,
        FormlyFilterHorizontalModule,
        FormlyFilterNestedModule,
        FormlyFilterHideExpressionModule,
        FormlyFilterIntroductionModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(FormlyModule.forRoot())],
    }),
  ],
  argTypes: {
    label: props,
    placeholder: props,
    description: props,
    required: props,
    disabled: props,
    tooltipText: props,
  },
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-filter-introduction></sds-formly-filter-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const AccordionGroup: StoryObj = (args) => ({
  template: '<sds-formly-filter-accordiongroup></sds-formly-filter-accordiongroup>',
  props: args,
});
AccordionGroup.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-accordiongroup',
    'FormlyFilterAccordionGroupModule',
    'sds-formly-filter-accordiongroup'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'accordiongroup'),
};
export const Horizontal: StoryObj = (args) => ({
  template: '<sds-formly-filter-horizontal></sds-formly-filter-horizontal>',
  props: args,
});
Horizontal.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-horizontal',
    'FormlyFilterHorizontalModule',
    'sds-formly-filter-horizontal'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'horizontal'),
};
export const Basic: StoryObj = (args) => ({
  template: '<sds-formly-filter-basic></sds-formly-filter-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-basic',
    'FormlyFilterBasicModule',
    'sds-formly-filter-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'basic'),
};

export const Single: StoryObj = (args) => ({
  template: '<sds-formly-filter-single></sds-formly-filter-single>',
  props: args,
});
Single.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-single',
    'FormlyFilterSingleModule',
    'sds-formly-filter-single'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'single'),
};

export const Nested: StoryObj = (args) => ({
  template: '<sds-formly-filter-nested></sds-formly-filter-nested>',
  props: args,
});
Nested.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-nested',
    'FormlyFilterNestedModule',
    'sds-formly-filter-nested',
    [createCodePreviewTabData('storybook/formly/formly-filter/formly-filter-nested/fields.ts', 'ts', false)]
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'nested'),
};

export const HideExpression: StoryObj = (args) => ({
  template: '<sds-formly-filter-hideexpression></sds-formly-filter-hideexpression>',
  props: args,
});
HideExpression.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-hideexpression',
    'FormlyFilterHideExpressionModule',
    'sds-formly-filter-hideexpression'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'hideexpression'),
};
