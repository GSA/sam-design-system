import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import {} from '@gsa-sam/sam-material-extensions';
import { FormlyModule } from '@ngx-formly/core';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { IconsColoringModule } from './icons-coloring/icons-coloring.module';
import { IconsRotationModule } from './icons-rotation/icons-rotation.module';
import { IconsScalingModule } from './icons-scaling/icons-scaling.module';
import { IconsSkewingModule } from './icons-skewing/icons-skewing.module';
import { IconsStackingModule } from './icons-stacking/icons-stacking.module';
import { IconsBasicModule } from './icons-basic/icons-basic.module';
import { IconsBootstrapModule } from './icons-bootstrap/icons-bootstrap.module';
import { IconsUswdsModule } from './icons-uswds/icons-uswds.module';

export default {
  title: 'Utilities/Icons',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        SdsFormlyModule,
        FormsModule,
        NoopAnimationsModule,
        FormlyModule.forRoot(),
        IconsColoringModule,
        IconsRotationModule,
        IconsScalingModule,
        IconsSkewingModule,
        IconsStackingModule,
        IconsBasicModule,
        IconsBootstrapModule,
        IconsUswdsModule,
      ],
    }),
  ],
} as Meta;
/*
export const Introduction: Story = (args) => ({
  template: '<sds-formly-file-info-introduction></sds-formly-file-info-introduction>',
  props: args,
});
Introduction.parameters = { options: { showPanel: false } };*/

export const Coloring: Story = (args) => ({
  template: '<usa-icon-coloring-demo></usa-icon-coloring-demo>',
  props: args,
});
Coloring.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/utilities/icons/icons-coloring', 'IconsColoringModule', 'usa-icon-coloring-demo'),
  stackblitzLink: generateStackblitzLink('icons-coloring', 'coloring'),
};

export const Rotation: Story = (args) => ({
  template: '<usa-icon-rotation-demo></usa-icon-rotation-demo>',
  props: args,
});
Rotation.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/utilities/icons/icons-rotation', 'IconsRotationModule', 'usa-icon-rotation-demo'),
  stackblitzLink: generateStackblitzLink('icons-rotation', 'rotation'),
};

export const Scaling: Story = (args) => ({
  template: '<usa-icon-scaling-demo></usa-icon-scaling-demo>',
  props: args,
});
Scaling.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/utilities/icons/icons-scaling', 'IconsScalingModule', 'usa-icon-scaling-demo'),
  stackblitzLink: generateStackblitzLink('icons-scaling', 'scaling'),
};

export const Skewing: Story = (args) => ({
  template: '<usa-icon-skewing-demo></usa-icon-skewing-demo>',
  props: args,
});
Skewing.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/utilities/icons/icons-skewing', 'IconsSkewingModule', 'usa-icon-skewing-demo'),
  stackblitzLink: generateStackblitzLink('icons-skewing', 'skewing'),
};

export const Stacking: Story = (args) => ({
  template: '<usa-icon-stacking-demo></usa-icon-stacking-demo>',
  props: args,
});
Stacking.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/utilities/icons/icons-stacking', 'IconsStackingModule', 'usa-icon-stacking-demo'),
  stackblitzLink: generateStackblitzLink('icons-stacking', 'stacking'),
};

export const Basic: Story = (args) => ({
  template: '<sds-icons-basic-demo></sds-icons-basic-demo>',
  props: args,
});
Basic.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/utilities/icons/icons-basic', 'IconsBasicModule', 'sds-icons-basic-demo'),
  stackblitzLink: generateStackblitzLink('icons-basic', 'basic'),
};

export const Bootstrap: Story = (args) => ({
  template: '<sds-icons-bootstrap-demo></sds-icons-bootstrap-demo>',
  props: args,
});
Bootstrap.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig(
    'storybook/utilities/icons/icons-bootstrap',
    'IconsBootstrapModule',
    'sds-icons-bootstrap-demo'
  ),
  stackblitzLink: generateStackblitzLink('icons-bootstrap', 'bootstrap'),
};

export const Uswds: Story = (args) => ({
  template: '<usa-icon-icons-demo></usa-icon-icons-demo>',
  props: args,
});
Uswds.parameters = {
  controls: {
    disabled: true,
    hideNoControlsWarning: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/utilities/icons/icons-uswds', 'IconsUswdsModule', 'usa-icon-icons-demo'),
  stackblitzLink: generateStackblitzLink('icons-uswds', 'uswds'),
};
/*export const __namedExportsOrder = ['Introduction', 'Basic', 'Options']; */
