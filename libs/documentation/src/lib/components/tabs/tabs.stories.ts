import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/angular/types-6-0';

import { TabsAutoActivateComponent } from './demos/auto-activate/tabs-auto-activate.component'
import { TabsAutoActivateModule } from './demos/auto-activate/tabs-auto-activate.module'
import { TabsBasicComponent } from './demos/basic/tabs-basic.component'
import { TabsBasicModule } from './demos/basic/tabs-basic.module'
import { TabsDisabledComponent } from './demos/disabled/tabs-disabled.component'
import { TabsDisabledModule } from './demos/disabled/tabs-disabled.module'
import { DynamicTabsComponet } from './demos/dynamic-tabs/dynamic-tabs.component'
import { DynamicTabsModule } from './demos/dynamic-tabs/dynamic-tabs.module'
import { TabsStylingComponent } from './demos/styling/tabs-styling.component'
import { TabsStylingModule } from './demos/styling/tabs-styling.module'
import { TabsTemplateHeaderComponent } from './demos/template-header/tabs-template-header.component'
import { TabsTemplateHeaderModule } from './demos/template-header/tabs-template-header.module'
import { TabPanelComponent } from '../../../../../packages/components/src/lib/tabs/tab-panel.component'
import { SdsTabsModule } from '../../../../../../libs/packages/components/src/lib/tabs/tabs.module'

export default {
  title: 'Example/Tabs',
  component: TabsBasicComponent, TabsAutoActivateComponent, TabsDisabledComponent, DynamicTabsComponet, TabsStylingComponent, TabsTemplateHeaderComponent, TabPanelComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule, 
        TabsAutoActivateModule, 
        TabsBasicModule, 
        TabsDisabledModule, 
        DynamicTabsModule, 
        TabsStylingModule, 
        TabsTemplateHeaderModule, 
        SdsTabsModule
    ],
    }),
  ],  
} as Meta;

const TabsBasicTemplate: Story<TabsBasicComponent> = (args: TabsBasicComponent) => ({
    component: TabsBasicComponent, TabPanelComponent,
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

const TabPanelTemplate: Story<TabPanelComponent> = (args: TabPanelComponent) => ({
    component: TabPanelComponent,
    props: args,
});

export const Basic = TabsBasicTemplate.bind({});
Basic.args = {
};

export const AutomaticActivated = TabsAutoActivateTemplate.bind({});
AutomaticActivated.args = {
};

export const Disabled = TabsDisabledTemplate.bind({});
Disabled.args = {
};

export const DynamicallyGenerate = TabsDynamicTemplate.bind({});
DynamicallyGenerate.args = {
};

export const CustomStyling = TabsStylingTemplate.bind({});
CustomStyling.args = {
};

export const CustomHeader = TabsTemplateHeaderTemplate.bind({});
CustomHeader.args = {
};




