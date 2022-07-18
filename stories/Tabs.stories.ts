import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { TabsAutoActivateComponent } from '../libs/documentation/src/lib/components/tabs/demos/auto-activate/tabs-auto-activate.component'
import { TabsBasicComponent } from '../libs/documentation/src/lib/components/tabs/demos/basic/tabs-basic.component'
import { TabsDisabledComponent } from '../libs/documentation/src/lib/components/tabs/demos/disabled/tabs-disabled.component'
import { DynamicTabsComponet } from '../libs/documentation/src/lib/components/tabs/demos/dynamic-tabs/dynamic-tabs.component'
import { TabsStylingComponent } from '../libs/documentation/src/lib/components/tabs/demos/styling/tabs-styling.component'
import { TabsTemplateHeaderComponent } from '../libs/documentation/src/lib/components/tabs/demos/template-header/tabs-template-header.component'

import { TabPanelComponent } from "@gsa-sam/components";

export default {
  title: 'Example/Tabs',
  component: TabsBasicComponent, TabsAutoActivateComponent, TabsDisabledComponent, DynamicTabsComponet, TabsTemplateHeaderComponent  
} as Meta;

const TabsBasicTemplate: Story<TabsBasicComponent> = (args: TabsBasicComponent) => ({
  component: TabsBasicComponent,
  props: args,
});

const TabsAutoActivateTemplate: Story<TabsAutoActivateComponent> = (args: TabsAutoActivateComponent) => ({
    component: TabsAutoActivateComponent,
    props: args,
});

const TabsDisabledTemplate: Story<TabsDisabledComponent> = (args: TabsDisabledComponent) => ({
    component: TabsDisabledComponent,
    props: args,
});

const TabsDynamicTemplate: Story<DynamicTabsComponet> = (args: DynamicTabsComponet) => ({
    component: DynamicTabsComponet,
    props: args,
});

const TabsStylingTemplate: Story<TabsStylingComponent> = (args: TabsStylingComponent) => ({
    component: TabsStylingComponent,
    props: args,
});

const TabsTemplateHeaderTemplate: Story<TabsTemplateHeaderComponent> = (args: TabsTemplateHeaderComponent) => ({
    component: TabsTemplateHeaderComponent,
    props: args,
});



// Template

export const Basic = TabsBasicTemplate.bind({});
Basic.args = {
};

export const AutoActivate = TabsAutoActivateTemplate.bind({});
AutoActivate.args = {
};

export const Disabled = TabsDisabledTemplate.bind({});
Disabled.args = {
};

export const Dynamic = TabsDynamicTemplate.bind({});
Dynamic.args = {
};

export const Styling = TabsStylingTemplate.bind({});
Styling.args = {
};

export const TemplateHeader = TabsTemplateHeaderTemplate.bind({});
TemplateHeader.args = {
};

