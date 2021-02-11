import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentWrapperComponent } from "../../shared/component-wrapper/component-wrapper.component";
import { DocumentationComponentsSharedModule, DocumentationDemoList } from "../shared";
import { DocumentationAPIPage } from "../shared/api-page/docs-api.component";
import { DocumentationExamplesPage } from "../shared/examples-page/examples.component";
import { DocumentationSourcePage } from "../shared/source-page/source.component";
import { DocumentationTemplatePage } from "../shared/template-page/template.component";
import { TabsBasicComponent } from "./demos/basic/tabs-basic.component";
import { TabsBasicModule } from "./demos/basic/tabs-basic.module";
import { TabsTemplateHeaderComponent } from "./demos/template-header/tabs-template-header.component";
import { TabsTemplateHeaderModule } from "./demos/template-header/tabs-template-header.module";

declare var require: any;
const DEMOS = {
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
  }
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
        }
      ]
    },
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    TabsBasicModule,
    TabsTemplateHeaderModule,
  ]
})
export class TabsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('tabs', DEMOS); // Register the component with the demo list
  }
}
