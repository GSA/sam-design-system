import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import {
  createCodePreviewTabData,
  generateConfig,
  generateStackblitzLink,
} from 'libs/documentation/src/sandbox/sandbox-utils';
import { SlideOutIntroductionModule } from './slide-out-introduction/slide-out-introduction.module';
import { SlideOutCustomTemplateModule } from './slide-out-custom-template/slide-out-custom-template.module';
import { SlideOutBasicModule } from './slide-out-basic/slide-out-basic.module';

export default {
  title: 'Components/Slide Out',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        SlideOutIntroductionModule,
        SlideOutCustomTemplateModule,
        SlideOutBasicModule,
      ],
    }),
  ],
  argTypes: {},
} as Meta;

export const Introduction: Story = (args) => ({
  template: `<sds-slide-out-introduction></sds-slide-out-introduction>`,
  props: {
    ...args,
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

export const Basic: Story = (args) => ({
  template: `<sds-slide-out-basic></sds-slide-out-basic>`,
  props: {
    ...args,
  },
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/slide-out/slide-out-basic', 'SlideOutBasicModule', 'sds-slide-out-basic', [
    createCodePreviewTabData('storybook/slide-out/slide-out-basic/template.html', 'html', false),
    createCodePreviewTabData('storybook/slide-out/slide-out-basic/template.scss', 'scss', false),
  ]),
  stackblitzLink: generateStackblitzLink('slide-out', 'basic'),
};

export const CustomTemplate: Story = (args) => ({
  template: `<sds-slide-out-custom-template></sds-slide-out-custom-template>`,
  props: {
    ...args,
  },
});
CustomTemplate.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/slide-out/slide-out-custom-template',
    'SlideOutCustomTemplateModule',
    'sds-slide-out-custom-template'
  ),
  stackblitzLink: generateStackblitzLink('slide-out', 'custom-template'),
};

export const __namedExportsOrder = ['Introduction', 'Basic', 'CustomTemplate'];
