import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { CollapseBasic } from '../libs/documentation/src/lib/components/collapse/demos/basic/collapse-basic.component'
// import { CollapseDirective  } from '../libs/packages/components/src/lib/collapse/collapse.directive';

export default {
  title: 'Example/Collapse',
  component: CollapseBasic,
} as Meta;

const Template: Story<CollapseBasic> = (args: CollapseBasic) => ({
  component: CollapseBasic,
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
    isCollapsedContent: true,
};

