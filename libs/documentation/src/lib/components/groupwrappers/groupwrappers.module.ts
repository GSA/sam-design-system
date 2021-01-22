import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { GroupPanelModule } from './demos/panel/group-panel.module';
import { GroupAccordionModule } from './demos/accordion/group-accordion.module';
import { GroupAccordion } from './demos/accordion/group-accordion.component';
import { GroupPanel } from './demos/panel/group-panel.component';

declare var require: any;
const DEMOS = {
  panel: {
    title: 'Group with Panel',
    type: GroupPanel,
    code: require('!!raw-loader!./demos/panel/group-panel.component'),
    markup: require('!!raw-loader!./demos/panel/group-panel.component.html'),
    path: 'libs/documentation/src/lib/components/groupwrappers/demos/panel'
  },
  accordion: {
    title: 'Group with Accordion',
    type: GroupAccordion,
    code: require('!!raw-loader!./demos/accordion/group-accordion.component'),
    markup: require('!!raw-loader!./demos/accordion/group-accordion.component.html'),
    path: 'libs/documentation/src/lib/components/groupwrappers/demos/accordion'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: "Group",
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyGroupWrapperComponent',
          wrappers: ['group']
        }
      ]
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    GroupPanelModule,
    GroupAccordionModule
  ]
})
export class GroupWrappersModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('groupwrappers', DEMOS);
  }
}
