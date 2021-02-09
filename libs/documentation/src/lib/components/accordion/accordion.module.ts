import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionBasic } from './demos/basic/accordion-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { AccordionBasicModule } from './demos/basic/accordion-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Accordion',
    type: AccordionBasic,
    code: require('!!raw-loader!./demos/basic/accordion-basic.component'),
    markup: require('!!raw-loader!./demos/basic/accordion-basic.component.html'),
    module: require('!!raw-loader!./demos/basic/accordion-basic.module'),
    path: 'libs/documentation/src/lib/components/accordion/demos/basic',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      items: [
        {
          pkg: 'material',
          type: 'components',
          name: 'SdsAccordionComponent',
        },
      ],
    },
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
    AccordionBasicModule,
  ],
})
export class AccordionModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('accordion', DEMOS);
  }
}
