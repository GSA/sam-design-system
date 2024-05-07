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
  title: 'Components/Actions Menu Config',
  tags: ['foo'],
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
      options: ['plain', 'primary'],
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
      control: 'array',
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
const ConfigurableTemplate = ({ type, shadow, actions, size, label, ...rest }) => {
  // size = 'sm'
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
export const Configurable = ConfigurableTemplate.bind({size: 'sm'})

Configurable.args = {
  model: {},
  actions: [
    /* prettier-ignore */ { "id": "DownloadBtn", "text": "Download" },
    /* prettier-ignore */ { "id": "FollowBtn", "text": "Follow" },
    /* prettier-ignore */ { "id": "ShareBtn", "text": "Share" },
  ],
};

export const SmallSize = ConfigurableTemplate.bind({})

SmallSize.args = {
  size: 'sm'
};

export const PrimaryType = ConfigurableTemplate.bind({})

PrimaryType.args = {
  type: 'primary'
};
