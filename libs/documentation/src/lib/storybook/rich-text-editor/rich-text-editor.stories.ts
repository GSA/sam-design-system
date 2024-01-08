import { CommonModule } from '@angular/common';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { RichTextEditorMinHeightModule } from './rich-text-editor-min-height/rich-text-editor-min-height.module';
import { RichTextEditorMaxHeightModule } from './rich-text-editor-max-height/rich-text-editor-max-height.module';
import { RichTextEditorIntroductionModule } from './rich-text-editor-introduction/rich-text-editor-introduction.module';

export default {
  title: 'Components/Rich-Text-Editor',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        RichTextEditorMinHeightModule,
        RichTextEditorMaxHeightModule,
        RichTextEditorIntroductionModule,
      ],
    }),
  ],
} as Meta;

export const Introduction: Story = (args) => ({
  template: '<sds-rich-text-editor-introduction></sds-rich-text-editor-introduction>',
  props: args,
});
Introduction.parameters = {
  options: { showPanel: false },
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: { disable: true },
};

export const MinHeight: Story = (args) => ({
  template: `<sds-rich-text-editor-min-height></sds-rich-text-editor-min-height>`,
  props: {
    ...args,
  },
});
MinHeight.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/rich-text-editor/rich-text-editor-min-height',
    'RichTextEditorMinHeightModule',
    'sds-rich-text-editor-min-height'
  ),
  stackblitzLink: generateStackblitzLink('rich-text-editor', 'min-height'),
};

export const MaxHeight: Story = (args) => ({
  template: `<sds-rich-text-editor-max-height></sds-rich-text-editor-max-height>`,
  props: {
    ...args,
  },
});
MaxHeight.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/rich-text-editor/rich-text-editor-max-height',
    'RichTextEditorMaxHeightModule',
    'sds-rich-text-editor-max-height'
  ),
  stackblitzLink: generateStackblitzLink('rich-text-editor', 'max-height'),
};

export const __namedExportsOrder = ['Introduction', 'MaxHeight', 'MinHeight'];
