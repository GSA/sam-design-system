import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig } from 'libs/documentation/src/sandbox/sandbox-utils';
import { FormlyFormsModule } from './formly-forms.module';

export default {
  title: 'Formly Examples/Address Form',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        FormlyModule.forRoot(),
        FormlyFormsModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
} as Meta;

export const AddressForm: StoryObj = (args) => ({
  template: '<sds-formly-forms></sds-formly-forms>',
  props: args,
});
AddressForm.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/formly/custom/formly-forms', 'FormlyFormsModule', 'sds-formly-forms'),
};
