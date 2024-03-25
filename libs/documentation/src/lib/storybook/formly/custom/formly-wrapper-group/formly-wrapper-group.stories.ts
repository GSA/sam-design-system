import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyWrapperGroupPanelModule } from './formly-wrapper-group-panel/formly-wrapper-group-panel.module';
import { FormlyWrapperGroupIntroductionModule } from './formly-wrapper-group-introduction/formly-wrapper-group-introduction.module';
import { FormlyWrapperGroupAccordionModule } from './formly-wrapper-group-accordion/formly-wrapper-group-accordion.module';

export default {
  title: 'Formly Examples/Group Wrapper',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyWrapperGroupIntroductionModule,
        FormlyWrapperGroupPanelModule,
        FormlyWrapperGroupAccordionModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-group-introduction></sds-formly-wrapper-group-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };

export const Panel: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-group-panel></sds-formly-wrapper-group-panel>',
  props: args,
});
Panel.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-group/formly-wrapper-group-panel',
    'FormlyWrapperGroupPanelModule',
    'sds-formly-wrapper-group-panel'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-group', 'panel'),
};

export const Accordion: StoryObj = (args) => ({
  template: '<sds-formly-wrapper-group-accordion></sds-formly-wrapper-group-accordion>',
  props: args,
});
Accordion.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/formly/custom/formly-wrapper-group/formly-wrapper-group-accordion',
    'FormlyWrapperGroupAccordionModule',
    'sds-formly-wrapper-group-template'
  ),
  stackblitzLink: generateStackblitzLink('formly-wrapper-group', 'accordion'),
};
