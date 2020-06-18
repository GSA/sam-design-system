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
import { AccordionBasicModule } from './demos/basic/accordion-basic.module';
import { AccordionDefaultModule } from './demos/default/accordion-default.module';
import { AccordionDefault } from './demos/default/accordion-default.component';
import { AccordionBasic } from './demos/basic/accordion-basic.component';

declare var require: any;
const DEMOS = {
  default: {
    title: 'Default Accordion',
    type: AccordionDefault,
    code: require('!!raw-loader!./demos/default/accordion-default.component'),
    markup: require('!!raw-loader!./demos/default/accordion-default.component.html'),
    readme: require('!!raw-loader!./demos/default/readme.md'),
    path: 'libs/documentation/src/lib/components/accordion/demos/default'
  },
  basic: {
    title: 'Basic Accordion',
    type: AccordionBasic,
    code: require('!!raw-loader!./demos/basic/accordion-basic.component'),
    markup: require('!!raw-loader!./demos/basic/accordion-basic.component.html'),
    readme: require('!!raw-loader!./demos/basic/readme.md'),
    path: 'libs/documentation/src/lib/components/accordion/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      items: [
        {
          pkg: 'components',
          type: 'components',
          name: 'SdsAccordionItemHeaderComponent'
        },
        {
          pkg: 'components',
          type: 'components',
          name: 'SdsAccordionItemComponent'
        },
        {
          pkg: 'components',
          type: 'directives',
          name: 'SdsAccordionDirective'
        },
        {
          pkg: 'components',
          type: 'directives',
          name: 'SdsAccordionItemContentDirective'
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
    AccordionBasicModule,
    AccordionDefaultModule
  ]
})
export class AccordionModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('accordion', DEMOS);
  }
}
