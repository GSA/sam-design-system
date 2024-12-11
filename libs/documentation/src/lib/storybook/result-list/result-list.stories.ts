import { SdsSearchResultListComponent } from '@gsa-sam/components';
import { moduleMetadata, Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { CommonModule } from '@angular/common';
import { ResultListIntroductionModule } from './result-list-introduction/result-list-introduction.module';
import { ResultListConfigurableModule } from './result-list-configurable/result-list-configurable.module';
import { ResultListBasicModule } from './result-list-basic/result-list-basic.module';
import { ResultListCustomComponentModule } from './result-list-custom-component/result-list-custom-component.module';
import { ResultListCustomTemplateModule } from './result-list-custom-template/result-list-custom-template.module';
import { ResultListMessagesModule } from './result-list-messages/result-list-messages.module';
import { provideAnimations } from '@angular/platform-browser/animations';

const disable = {
  table: {
    disable: true,
  },
};

export default {
  title: 'Components/Result-List',
  component: SdsSearchResultListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        ResultListIntroductionModule,
        ResultListConfigurableModule,
        ResultListBasicModule,
        ResultListCustomComponentModule,
        ResultListCustomTemplateModule,
        ResultListMessagesModule,
      ],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  argTypes: {
    updateModel: disable,
    goBack: disable,
    isTemplate: disable,
    resultContentTemplate: disable,
    customResultsTemplate: disable,
    model: disable,

    showMessage: {
      control: 'boolean',
      table: {
        category: 'storybook-controls',
      },
    },

    results: {
      control: 'object',
      if: { arg: 'showMessage', truthy: false },
      table: {
        category: 'inputs',
      },
    },
    divider: {
      if: { arg: 'showMessage', truthy: false },
    },
    type: {
      control: {
        options: ['', 'error', 'info', 'empty', 'loading', 'initial'],
        type: 'select',
      },
      if: { arg: 'showMessage' },
      table: {
        category: 'metadata-messages',
      },
    },
    title: {
      control: {
        type: 'text',
      },
      if: { arg: 'showMessage' },
      table: {
        category: 'metadata-messages',
      },
    },
    message: {
      control: {
        type: 'text',
      },
      if: { arg: 'showMessage' },
      table: {
        category: 'metadata-messages',
      },
    },
    classes: {
      control: {
        type: 'text',
      },
      if: { arg: 'showMessage' },
      table: {
        category: 'metadata-messages',
      },
    },

    isDefaultModel: {
      control: 'boolean',
      if: { arg: 'showMessage' },
    },
  },
} as Meta;

const resultListConfigFunction = (
  results?: Array<any>,
  showMessage?: boolean,
  type?: string,
  title?: string,
  message?: string,
  classes?: string,
  defaultModel?: boolean,
) => {
  if (showMessage) {
    return {
      results: [],
      metadata: defaultModel
        ? null
        : {
            messages: [
              {
                type: type ?? 'initial',
                title: title ?? 'Search Criteria',
                message: message ?? `Choose your filter to run report`,
                classes: classes ?? 'usa-custom',
              },
            ],
          },
    };
  } else {
    return {
      results: results ?? [
        { title: 'First', id: 1 },
        { title: 'Second', id: 2 },
        { title: 'Third', id: 3 },
        { title: 'Fourth', id: 4 },
        { title: 'Fifth', id: 5, hasNewerData: true },
      ],
    };
  }
};

export const Introduction: StoryObj = (args) => ({
  template: '<sds-result-list-introduction></sds-result-list-introduction>',
  props: args,
});
Introduction.parameters = {
  controls: { disable: true },
  actions: { disable: true },
  sdsCodePreview: { disable: true },
};

export const Configurable: StoryObj = (args) => {
  const { results, showMessage, type, title, message, classes, isDefaultModel } = args;

  const config = resultListConfigFunction(results, showMessage, type, title, message, classes, isDefaultModel);

  return {
    template: '<sds-result-list-configurable [configuration]=config [divider]=divider ></sds-result-list-configurable>',
    props: {
      config,
      ...args,
    },
  };
};
Configurable.parameters = {
  sdsCodePreview: { disable: true },
  actions: { disable: true },
};
Configurable.args = {
  results: [
    { title: 'First', id: 1 },
    { title: 'Second', id: 2 },
    { title: 'Third', id: 3 },
    { title: 'Fourth', id: 4 },
    { title: 'Fifth', id: 5, hasNewerData: true },
  ],
  showMessage: false,
};

export const Basic: StoryObj = (args) => ({
  template: '<sds-result-list-basic></sds-result-list-basic>',
  props: args,
});
Basic.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig('storybook/result-list/result-list-basic', 'ResultListBasicModule', 'sds-result-list-basic'),
  stackblitzLink: generateStackblitzLink('result-list', 'basic'),
};

export const Messages: StoryObj = (args) => ({
  template: '<sds-result-list-messages></sds-result-list-messages>',
  props: args,
});
Messages.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/result-list/result-list-messages',
    'ResultListMessagesModule',
    'sds-result-list-messages',
  ),
  stackblitzLink: generateStackblitzLink('result-list', 'messages'),
};

export const CustomTemplate: StoryObj = (args) => ({
  template: '<sds-result-list-custom-template></sds-result-list-custom-template>',
  props: args,
});
CustomTemplate.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/result-list/result-list-custom-template',
    'ResultListCustomTemplateModule',
    'sds-result-list-custom-template',
  ),
  stackblitzLink: generateStackblitzLink('result-list', 'custom-template'),
};

export const CustomComponent: StoryObj = (args) => ({
  template: '<sds-result-list-custom-component></sds-result-list-custom-component>',
  props: args,
});
CustomComponent.parameters = {
  controls: {
    disable: true,
    hideNoControlsWarning: true,
  },
  actions: { disable: true },
  preview: generateConfig(
    'storybook/result-list/result-list-custom-component',
    'ResultListCustomComponentModule',
    'sds-result-list-custom-component',
  ),
  stackblitzLink: generateStackblitzLink('result-list', 'custom-component'),
};
