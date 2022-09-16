import { Story, Meta } from '@storybook/angular/types-6-0';
import Links from './links.component';

export default {
  title: 'Resource/Links',
  titleUrl: 'https://cg-fa19003e-5296-4960-ac2e-caccfeb620ac.app.cloud.gov/site/gsa/sam-design-system',
  component: Links,
  id: '',
} as Meta;

const Template: Story<Links> = (args: Links) => ({
  props: args,
});

export const SamDesignSystem = Template.bind({});


export const SamStyles = Template.bind({});

export const NgsUSWDS = Template.bind({});


export const USWDS = Template.bind({});

