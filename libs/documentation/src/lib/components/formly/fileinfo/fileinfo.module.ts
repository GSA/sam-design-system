import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from '../../shared/index';
import { ComponentWrapperComponent } from '../../../shared/component-wrapper/component-wrapper.component';
import { FormlyFileInfoBasic } from './demos/basic/fileinfo-basic.component';
import { FormlyFileInfoBasicModule } from './demos/basic/fileinfo-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form File Info',
    type: FormlyFileInfoBasic,
    code: require('!!raw-loader!./demos/basic/fileinfo-basic.component'),
    markup: require('!!raw-loader!./demos/basic/fileinfo-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly/fileinfo/demos/basic',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: {
      title: 'Datepicker',
      readme: {},
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyFieldFileInfoComponent',
          formType: 'fileinfo',
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
    FormlyFileInfoBasicModule,
  ],
})
export class FormlyFileInfoModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-fileinfo', DEMOS);
  }
}
