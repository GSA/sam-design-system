import { CommonModule } from '@angular/common';
import { SdsExpiresDirective, SdsExpiresModule } from '@gsa-sam/components';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { generateConfig, generateStackblitzLink } from 'libs/documentation/src/sandbox/sandbox-utils';
import { ExpiresConfigurableModule } from './expires-configurable/expires-configurable.module';
import { ExpiresExpiresModule } from './expires-expires/expires-expires.module';

const disable = {
  table: {
    disable: true,
  },
};
export default {
  title: 'Components/Expires',
  component: SdsExpiresDirective,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SdsExpiresModule, ExpiresConfigurableModule, ExpiresExpiresModule],
    }),
  ],
  argTypes: {
    expires: {
      control: 'date',
    },
    initialized: disable,
  },
} as Meta;
const Template: Story<SdsExpiresDirective> = (args) => ({
  template: `
      <expires-configurable [expiresString]="expires"></expires-configurable>
    `,
  props: args,
});
export const Configurable = Template.bind({});
Configurable.args = {
  expires: 'Jan 5, 2099',
};
Configurable.parameters = {
  preview: { disabled: true },
  actions: { disabled: true },
};
export const Expires: Story = (args) => ({
  template: `<expires-expires></expires-expires>`,
  props: args,
});
Expires.parameters = {
  controls: {
    disabled: true,
  },
  actions: { disabled: true },
  preview: generateConfig('storybook/expires/expires-expires', 'ExpiresExpiresModule', 'expires-expires'),
  stackblitzLink: generateStackblitzLink('expires', 'expires'),
};
