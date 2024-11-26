import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ActionMenuModel, SdsActionsMenuModule, SdsMenuModule } from '@gsa-sam/components';
import { applicationConfig, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { ActionsIntroductionModule } from './actions-introduction/actions-introduction.module';
import { ActionsLabelModule } from './actions-label/actions-label.module';
import { ActionsModelTriggerModule } from './actions-model-trigger/actions-model-trigger.module';
import { ActionsSizeModule } from './actions-size/actions-size.module';

const disable = {
  table: {
    disable: true,
  },
};
export default {
  title: 'Components/Actions Menu',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        SdsActionsMenuModule,
        SdsMenuModule,
        ActionsSizeModule,
        ActionsLabelModule,
        ActionsModelTriggerModule,
        ActionsIntroductionModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  argTypes: {
    actionModes: disable,
    model: disable,
    clicks: disable,
    getDisabled: disable,
    ngOnInit: disable,
    size: {
      options: ['', 'sm'],
      control: 'select',
    },
    type: {
      options: ['plain', 'primary', 'secondary'],
      control: 'select',
      description: '',
      table: {
        category: 'ActionMenuModel/trigger',
      },
    },
    shadow: {
      control: {
        type: 'boolean',
      },
      description: '',
      table: {
        category: 'ActionMenuModel/trigger',
      },
    },
    label: {
      control: {
        type: 'text',
      },

      table: {
        category: 'ActionMenuModel',
      },
    },
    actions: {
      control: 'object',
      table: {
        category: 'ActionMenuModel/actions',
      },
    },
  },
} as Meta;

const actionsMenuModalFunction = (type, shadow, actions, label) => {
  const toReturn: ActionMenuModel = {
    label: label ?? '',
    trigger: {
      type: type ?? 'plain',
      shadow: shadow ?? true,
    },
    actions: actions ?? [
      /* prettier-ignore */ { "id": "DownloadBtn", "text": "Download" },
      /* prettier-ignore */ { "id": "FollowBtn", "text": "Follow" },
      /* prettier-ignore */ { "id": "ShareBtn", "text": "Share" },
    ],
  };
  return toReturn;
};
export const Configurable = ({ type, shadow, actions, size, label, ...rest }) => {
  const menu = actionsMenuModalFunction(type, shadow, actions, label);
  return {
    template: `
      <sds-actions-menu
        [model]="menu"
        [size]="size"
        [screenReaderText]="screenReaderText"
      ></sds-actions-menu>
    `,
    props: {
      menu,
      size,
      actions,
      rest,
    },
  };
};
Configurable.args = {
  model: {},
  actions: [
    /* prettier-ignore */ { "id": "DownloadBtn", "text": "Download" },
    /* prettier-ignore */ { "id": "FollowBtn", "text": "Follow" },
    /* prettier-ignore */ { "id": "ShareBtn", "text": "Share" },
  ],
};
Configurable.parameters = {
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Size: StoryObj = (args) => ({
  template: '<sds-actions-size></sds-actions-size>',
  props: args,
});
Size.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/actions/actions-size', 'ActionsSizeModule', 'sds-actions-size'),
  stackblitzLink: generateStackblitzLink('actions', 'size'),
};

export const Label: StoryObj = (args) => ({
  template: '<sds-actions-label></sds-actions-label>',
  props: args,
});
Label.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/actions/actions-label', 'ActionsLabelModule', 'sds-actions-label'),
  stackblitzLink: generateStackblitzLink('actions', 'label'),
};

export const ModelTrigger: StoryObj = (args) => ({
  template: '<sds-actions-model-trigger></sds-actions-model-trigger>',
  props: args,
});
ModelTrigger.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/actions/actions-model-trigger',
    'ActionsModelTriggerModule',
    'sds-actions-model-trigger'
  ),
  stackblitzLink: generateStackblitzLink('actions', 'model-trigger'),
};

export const Introduction: StoryObj = (args) => ({
  template: '<sds-actions-introduction></sds-actions-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};
