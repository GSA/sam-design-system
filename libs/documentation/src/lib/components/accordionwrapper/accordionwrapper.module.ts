import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionWrapperBasic } from './demos/basic/accordionwrapper-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { AccordionWrapperBasicModule } from './demos/basic/accordionwrapper-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Accordion Wrapper',
    type: AccordionWrapperBasic,
    code: require('!!raw-loader!./demos/basic/accordionwrapper-basic.component'),
    markup: require('!!raw-loader!./demos/basic/accordionwrapper-basic.component.html'),
    path: 'libs/documentation/src/lib/components/accordionwrapper/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: "Accordion Wrapper",
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyAccordianFormFieldComponent',
          wrappers: ['accordionwrapper']
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
    AccordionWrapperBasicModule
  ]
})
export class AccordionWrapperModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('accordionwrapper', DEMOS);
  }
}
