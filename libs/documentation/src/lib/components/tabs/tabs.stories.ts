import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/angular/types-6-0';
import {
    TabPanelComponent,
    TabsComponent,
    SdsTabsModule,
} from '@gsa-sam/components';
import { generateConfig } from 'libs/documentation/src/sandbox/sandbox-utils';
import { TabsAutoActivateComponent } from './demos/tabs-auto-activate/tabs-auto-activate.component'
import { TabsAutoActivateModule } from './demos/tabs-auto-activate/tabs-auto-activate.module'
import { TabsBasicComponent } from './demos/tabs-basic/tabs-basic.component'
import { TabsBasicModule } from './demos/tabs-basic/tabs-basic.module'
import { TabsDisabledComponent } from './demos/tabs-disabled/tabs-disabled.component'
import { TabsDisabledModule } from './demos/tabs-disabled/tabs-disabled.module'
import { DynamicTabsComponet } from './demos/dynamic-tabs/dynamic-tabs.component'
import { DynamicTabsModule } from './demos/dynamic-tabs/dynamic-tabs.module'
import { TabsStylingComponent } from './demos/tabs-styling/tabs-styling.component'
import { TabsStylingModule } from './demos/tabs-styling/tabs-styling.module'
import { TabsTemplateHeaderComponent } from './demos/tabs-template-header/tabs-template-header.component'
import { TabsTemplateHeaderModule } from './demos/tabs-template-header/tabs-template-header.module'
//import { TabPanelComponent } from '../../../../../packages/components/src/lib/tabs/tab-panel.component'
//import { SdsTabsModule } from '../../../../../../libs/packages/components/src/lib/tabs/tabs.module'

export default {
  title: 'Example/Tabs',
  component: TabsBasicComponent, TabsAutoActivateComponent, TabsDisabledComponent, DynamicTabsComponet, TabsStylingComponent, TabsTemplateHeaderComponent, TabPanelComponent, TabsComponent,
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
  argTypes: {
    selectConfigTab: {
        action: 'selectConfigTab',
        table: {
          disable: true,
        },
    },
    toggleConfigTab: {
        action: 'toggleConfigTab',
        table: {
          disable: true,
        },
    },
    tabTables: { control: "object" },
    selectedTab: { 
        //options: ['Tab1', 'Tab2', 'Tab3'],
        //control: TabPanelComponent
    }
  },
} as Meta;

const Template: Story<TabsComponent> = (args: TabsComponent) => {
    return {
      template: `
        <sds-tabs [automaticActivation]=automaticActivation>
            <sds-tab-panel *ngFor="let tabTitle of tabTitles | keyvalue" tabHeader="{{tabTitle.key}}" #tabTitle.key>
                {{tabTitle.value.text}}
            </sds-tab-panel>
        </sds-tabs>
      `, 
      props: args,
    };
};


export const Configurable = Template.bind({});
Configurable.args = {
    tabTitles: {
        Tab1: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }, 
        Tab2: {
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
        Tab3: {
            text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        },
    },
    automaticActivation: true, 
};
Configurable.parameters = {
    controls: { exclude: ['tabTables', 'selectTab'] },
    actions: { disabled: true },
    preview: { disabled: true },
};

const TabsBasicTemplate: Story<TabsBasicComponent> = (args: TabsBasicComponent) => ({
    component: TabsBasicComponent, TabPanelComponent,
    props: args,
});
export const Basic = TabsBasicTemplate.bind({});
Basic.args = {
};
Basic.parameters = {
    controls: {
        disabled: true,
        hideNoControlsWarning: true,
      },
    actions: { disabled: true },
    preview: generateConfig(
        'components/tabs/demos/tabs-basic',
        'TabsBasicModule',
        'sds-tabs-basic-demo'
    ),
};

const TabsAutoActivateTemplate: Story<TabsAutoActivateComponent> = (args: TabsAutoActivateComponent) => ({
    component: TabsAutoActivateComponent,
    props: args,
});
export const AutomaticActivated = TabsAutoActivateTemplate.bind({});
AutomaticActivated.args = {
};
AutomaticActivated.parameters = {
    controls: {
        disabled: true,
        hideNoControlsWarning: true,
      },
    actions: { disabled: true },
    preview: generateConfig(
        'components/tabs/demos/tabs-auto-activate',
        'TabsAutoActivateModule',
        'sds-tabs-auto-activate-demo'
    ),
};

const TabsDisabledTemplate: Story<TabsDisabledComponent> = (args: TabsDisabledComponent) => ({
    component: TabsDisabledComponent,
    props: args,
});
export const Disabled = TabsDisabledTemplate.bind({});
Disabled.args = {
};
Disabled.parameters = {
    controls: {
        disabled: true,
        hideNoControlsWarning: true,
      },
    actions: { disabled: true },
    preview: generateConfig(
        'components/tabs/demos/tabs-disabled',
        'TabsDisabledModule',
        'sds-tabs-disabled-demo'
    ),
};

const TabsDynamicTemplate: Story<DynamicTabsComponet> = (args: DynamicTabsComponet) => ({
    component: DynamicTabsComponet,
    props: args,
});
export const DynamicallyGenerate = TabsDynamicTemplate.bind({});
DynamicallyGenerate.args = {
};
DynamicallyGenerate.parameters = {
    controls: {
        disabled: true,
        hideNoControlsWarning: true,
      },
    actions: { disabled: true },
    preview: generateConfig(
        'components/tabs/demos/dynamic-tabs',
        'DynamicTabsModule',
        'sds-dynamic-tabs-demo'
    ),
};

const TabsStylingTemplate: Story<TabsStylingComponent> = (args: TabsStylingComponent) => ({
    component: TabsStylingComponent,
    props: args,
});
export const CustomStyling = TabsStylingTemplate.bind({});
CustomStyling.args = {
};
CustomStyling.parameters = {
    controls: {
        disabled: true,
        hideNoControlsWarning: true,
      },
    actions: { disabled: true },
    preview: generateConfig(
        'components/tabs/demos/tabs-styling',
        'TabsStylingModule',
        'sds-tabs-styling-demo'
    ),
};

const TabsTemplateHeaderTemplate: Story<TabsTemplateHeaderComponent> = (args: TabsTemplateHeaderComponent) => ({
    component: TabsTemplateHeaderComponent,
    props: args,
});
export const CustomHeader = TabsTemplateHeaderTemplate.bind({});
CustomHeader.args = {
};
CustomHeader.parameters = {
    controls: {
        disabled: true,
        hideNoControlsWarning: true,
      },
    actions: { disabled: true },
    preview: generateConfig(
        'components/tabs/demos/tabs-template-header',
        'TabsTemplateHeaderModule',
        'sds-tabs-template-header-demo'
    ),
};




