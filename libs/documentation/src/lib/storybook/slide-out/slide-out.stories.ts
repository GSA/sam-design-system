import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
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
      imports: [CommonModule, SlideOutIntroductionModule, SlideOutCustomTemplateModule, SlideOutBasicModule],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  argTypes: {},
} as Meta;

export const Introduction: StoryObj = (args) => ({
  template: `<sds-slide-out-introduction></sds-slide-out-introduction>`,
  props: {
    ...args,
  },
});
Introduction.parameters = {
  options: { showPanel: false },
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Basic: StoryObj = (args) => ({
  template: `<sds-slide-out-basic></sds-slide-out-basic>`,
  props: {
    ...args,
  },
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/slide-out/slide-out-basic', 'SlideOutBasicModule', 'sds-slide-out-basic', [
    createCodePreviewTabData('storybook/slide-out/slide-out-basic/template.html', 'html', false),
    createCodePreviewTabData('storybook/slide-out/slide-out-basic/template.scss', 'scss', false),
  ]),
  stackblitzLink: generateStackblitzLink('slide-out', 'basic'),
};

export const CustomTemplate: StoryObj = (args) => ({
  template: `<sds-slide-out-custom-template></sds-slide-out-custom-template>`,
  props: {
    ...args,
  },
});
CustomTemplate.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/slide-out/slide-out-custom-template',
    'SlideOutCustomTemplateModule',
    'sds-slide-out-custom-template'
  ),
  stackblitzLink: generateStackblitzLink('slide-out', 'custom-template'),
};
