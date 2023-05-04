import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import {} from '@gsa-sam/sam-material-extensions';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyFilterConfigurableModule } from './formly-filter-configurable/formly-filter-configurable.module';
import { FormlyFilterBasicModule } from './formly-filter-basic/formly-filter-basic.module';
import { FormlyFilterSingleModule } from './formly-filter-single/formly-filter-single.module';
import { FormlyFilterIntroductionModule } from './formly-filter-introduction/formly-filter-introduction.module';
import { FormlyFilterAccordionGroupModule } from './formly-filter-accordiongroup/formly-filter-accordiongroup.module';
import { FormlyFilterHideExpressionModule } from './formly-filter-hideexpression/formly-filter-hideexpression.module';
import { FormlyFilterNestedModule } from './formly-filter-nested/formly-filter-nested.module';
import { FormlyFilterHorizontalModule } from './formly-filter-horizontal/formly-filter-horizontal.module';
const disable = {
  table: {
    disable: true,
  },
};
const templateOptions = {
  table: {
    category: 'template-options',
  },
};

export default {
  title: 'Formly/Filter',
  // component: SdsButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyFilterIntroductionModule,
        FormlyFilterConfigurableModule,
        NoopAnimationsModule,
        FormlyFilterAccordionGroupModule,
        FormlyFilterBasicModule,
        FormlyFilterSingleModule,
        FormlyFilterHorizontalModule,
        FormlyFilterNestedModule,
        FormlyFilterHideExpressionModule,
        FormlyFilterIntroductionModule,
      ],
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

const formlyConfigFunction = (
  label: string,
  placeholder: string,
  description: string,
  required: boolean,
  disabled: boolean,
  tooltipText: string
) => {
  return {
    label: label ?? '',
    placeholder: placeholder ?? '',
    description: description ?? '',
    required: required ?? false,
    disabled: disabled ?? false,
    tooltipText: tooltipText ?? '',
  };
};
const Template: Story = (args) => {
  const { label, placeholder, description, required, disabled, tooltipText } = args;
  let config = formlyConfigFunction(label, placeholder, description, required, disabled, tooltipText);
  return {
    template: '<sds-formly-filter-configurable [config]="configObj"></sds-formly-filter-configurable>',
    props: {
      configObj: config,
      ...args,
    },
  };
};

export const Introduction: Story = (args) => ({
  template: '<sds-formly-filter-introduction></sds-formly-filter-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Configurable = Template.bind({});
Configurable.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  description: 'Description',
  required: false,
  disabled: false,
  tooltipText: '',
};
Configurable.parameters = {
  preview: { disabled: true },
};

export const AccordionGroup: Story = (args) => ({
  template: '<sds-formly-filter-accordiongroup></sds-formly-filter-accordiongroup>',
  props: args,
});
AccordionGroup.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-accordiongroup',
    'FormlyFilterAccordionGroupModule',
    'sds-formly-filter-accordiongroup'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'filter-accordiongroup'),
};
export const Horizontal: Story = (args) => ({
  template: '<sds-formly-filter-horizontal></sds-formly-filter-horizontal>',
  props: args,
});
Horizontal.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-horizontal',
    'FormlyFilterHorizontalModule',
    'sds-formly-filter-horizontal'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'horizontal'),
};
export const Basic: Story = (args) => ({
  template: '<sds-formly-filter-basic></sds-formly-filter-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-basic',
    'FormlyFilterBasicModule',
    'sds-formly-filter-basic'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'basic'),
};

export const Single: Story = (args) => ({
  template: '<sds-formly-filter-single></sds-formly-filter-single>',
  props: args,
});
Single.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-single',
    'FormlyFilterSingleModule',
    'sds-formly-filter-single'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'single'),
};

export const Nested: Story = (args) => ({
  template: '<sds-formly-filter-nested></sds-formly-filter-nested>',
  props: args,
});
Nested.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-nested',
    'FormlyFilterNestedModule',
    'sds-formly-filter-nested'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'nested'),
};

export const HideExpression: Story = (args) => ({
  template: '<sds-formly-filter-hideexpression></sds-formly-filter-hideexpression>',
  props: args,
});
HideExpression.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/formly/formly-filter/formly-filter-hideexpression',
    'FormlyFilterHideExpressionModule',
    'sds-formly-filter-hideexpression'
  ),
  stackblitzLink: generateStackblitzLink('formly-filter', 'hideexpression'),
};

export const __namedExportsOrder = [
  'Introduction',
  //'Configurable',
  'Basic',
  'Single',
  'AccordionGroup',
  'HideExpression',
  'Nested',
  'Horizontal',
];
