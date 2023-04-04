import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { TabsAutoActivateComponent } from './demos/auto-activate/tabs-auto-activate.component';
import { TabsAutoActivateModule } from './demos/auto-activate/tabs-auto-activate.module';
import { TabsBasicComponent } from './demos/basic/tabs-basic.component';
import { TabsBasicModule } from './demos/basic/tabs-basic.module';
import { TabsDisabledComponent } from './demos/disabled/tabs-disabled.component';
import { TabsDisabledModule } from './demos/disabled/tabs-disabled.module';
import { DynamicTabsComponet } from './demos/dynamic-tabs/dynamic-tabs.component';
import { DynamicTabsModule } from './demos/dynamic-tabs/dynamic-tabs.module';
import { TabsInterceptComponent } from './demos/tabs-intercept/tabs-intercept.component';
import { TabsInterceptModule } from './demos/tabs-intercept/tabs-intercept.module';
import { TabsStylingComponent } from './demos/styling/tabs-styling.component';
import { TabsStylingModule } from './demos/styling/tabs-styling.module';
import { TabsTemplateHeaderComponent } from './demos/template-header/tabs-template-header.component';
import { TabsTemplateHeaderModule } from './demos/template-header/tabs-template-header.module';
import { TabsLinkToSbComponent } from './demos/tabs-link-to-sb/tabs-link-to-sb.component';
import { TabsLinkToSbModule } from './demos/tabs-link-to-sb/tabs-link-to-sb.module';

declare var require: any;
const DEMOS = {
  linkToSb: {
    title: 'New Demos',
    type: TabsLinkToSbComponent,
    code: require('!!raw-loader!./demos/tabs-link-to-sb/tabs-link-to-sb.component'),
    markup: require('!!raw-loader!./demos/tabs-link-to-sb/tabs-link-to-sb.component.html'),
    module: require('!!raw-loader!./demos/tabs-link-to-sb/tabs-link-to-sb.module.ts'),
    path: 'libs/documentation/src/lib/components/tabs/demos/tabs-link-to-sb',
  },
  basic: {
    title: 'Tabs',
    type: TabsBasicComponent,
    code: require('!!raw-loader!./demos/basic/tabs-basic.component'),
    markup: require('!!raw-loader!./demos/basic/tabs-basic.component.html'),
    module: require('!!raw-loader!./demos/basic/tabs-basic.module.ts'),
    path: 'libs/documentation/src/lib/components/tabs/demos/basic',
  },
  templateHeader: {
    title: 'Custom Tab Header',
    type: TabsTemplateHeaderComponent,
    code: require('!!raw-loader!./demos/template-header/tabs-template-header.component'),
    markup: require('!!raw-loader!./demos/template-header/tabs-template-header.component.html'),
    module: require('!!raw-loader!./demos/template-header/tabs-template-header.module.ts'),
    path: 'libs/documentation/src/lib/components/tabs/demos/template-header',
  },
  disabledTabs: {
    title: 'Disabled Tabs',
    type: TabsDisabledComponent,
    code: require('!!raw-loader!./demos/disabled/tabs-disabled.component'),
    markup: require('!!raw-loader!./demos/disabled/tabs-disabled.component.html'),
    module: require('!!raw-loader!./demos/disabled/tabs-disabled.module.ts'),
    path: 'libs/documentation/src/lib/components/tabs/demos/disabled',
  },
  automaticActivation: {
    title: 'Automatic Activated Tabs',
    type: TabsAutoActivateComponent,
    code: require('!!raw-loader!./demos/auto-activate/tabs-auto-activate.component'),
    markup: require('!!raw-loader!./demos/auto-activate/tabs-auto-activate.component.html'),
    module: require('!!raw-loader!./demos/auto-activate/tabs-auto-activate.module.ts'),
    path: 'libs/documentation/src/lib/components/tabs/demos/auto-activate',
  },
  dynamicTabs: {
    title: 'Dynamically Generate Tabs',
    type: DynamicTabsComponet,
    code: require('!!raw-loader!./demos/dynamic-tabs/dynamic-tabs.component'),
    markup: require('!!raw-loader!./demos/dynamic-tabs/dynamic-tabs.component.html'),
    module: require('!!raw-loader!./demos/dynamic-tabs/dynamic-tabs.module.ts'),
    path: 'libs/documentation/src/lib/components/tabs/demos/dynamic-tabs',
  },
  tabsClass: {
    title: 'Custom Styling Tabs',
    type: TabsStylingComponent,
    code: require('!!raw-loader!./demos/styling/tabs-styling.component'),
    markup: require('!!raw-loader!./demos/styling/tabs-styling.component.html'),
    module: require('!!raw-loader!./demos/styling/tabs-styling.module.ts'),
    path: 'libs/documentation/src/lib/components/tabs/demos/styling',
  },
  interceptTabChange: {
    title: 'Intercept Tab Change',
    type: TabsInterceptComponent,
    code: require('!!raw-loader!./demos/tabs-intercept/tabs-intercept.component'),
    markup: require('!!raw-loader!./demos/tabs-intercept/tabs-intercept.component.html'),
    module: require('!!raw-loader!./demos/tabs-intercept/tabs-intercept.module.ts'),
    path: 'libs/documentation/src/lib/components/tabs/demos/tabs-intercept',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: {
      items: [
        {
          pkg: 'components',
          type: 'components',
          name: 'SdsTabsComponent',
        },
      ],
    },
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    TabsBasicModule,
    TabsTemplateHeaderModule,
    TabsDisabledModule,
    TabsAutoActivateModule,
    DynamicTabsModule,
    TabsStylingModule,
    TabsInterceptModule,
    TabsLinkToSbModule,
  ],
})
export class TabsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('tabs', DEMOS); // Register the component with the demo list
  }
}
