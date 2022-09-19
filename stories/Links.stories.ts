import { Story, Meta } from '@storybook/angular/types-6-0';
import Links from './links.component';

export default {
  title: 'Resource/Links',
  component: Links,
} as Meta;

const Template: Story<Links> = (args: Links) => ({
  props: args,
});

export const SamDesignSystem = Template.bind({});


export const SamStyles = Template.bind({});


export const NgsUSWDS = Template.bind({});


export const USWDS = Template.bind({});

