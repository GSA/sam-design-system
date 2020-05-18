import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionGroupBasic } from './demos/basic/accordiongroup-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { AccordionGroupBasicModule } from './demos/basic/accordiongroup-basic.module';

declare var require: any;
const DEMOS = {
  formfield: {
    title: 'Groups',
    type: AccordionGroupBasic,
    code: require('!!raw-loader!./demos/basic/accordiongroup-basic.component'),
    markup: require('!!raw-loader!./demos/basic/accordiongroup-basic.component.html'),
    path: 'libs/documentation/src/lib/components/accordiongroup/demos/basic'
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
          name: 'FormlyAccordianFormFieldComponent',
          wrappers: ['accordiongroup']
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
    AccordionGroupBasicModule
  ]
})
export class GroupWrappersModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('accordiongroup', DEMOS);
  }
}
