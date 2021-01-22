import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { ReadonlyBasicComponent } from './demos/basic/readonly-basic.component';
import { ReadonlyBasicModule } from './demos/basic/readonly-basic.module';
import { ReadonlyWrapperComponent } from './demos/wrapper/readonly-wrapper.component';
import { ReadonlyWrapperModule } from './demos/wrapper/readonly-wrapper.module';
import { ReadonlyFormlyTypeModule } from './demos/formlytype/readonly-formly.module';
import { ReadonlyFormlyTypeComponent } from './demos/formlytype/readonly-formly-type.component';
import { CustomTemplateComponent } from './demos/customtemplate/custom-template.component';
import { CustomTemplateModule } from './demos/customtemplate/custom-template.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Readonly',
    type: ReadonlyBasicComponent,
    code: require('!!raw-loader!./demos/basic/readonly-basic.component'),
    markup: require('!!raw-loader!./demos/basic/readonly-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly-readonly/demos/basic'
  },
  wrapper: {
    title: 'Readonly Without Formly',
    type: ReadonlyWrapperComponent,
    code: require('!!raw-loader!./demos/wrapper/readonly-wrapper.component'),
    markup: require('!!raw-loader!./demos/wrapper/readonly-wrapper.component.html'),
    path: 'libs/documentation/src/lib/components/formly-readonly/demos/wrapper'
  },
  formlytype: {
    title: 'Readonly as Formly Type',
    type: ReadonlyFormlyTypeComponent,
    code: require('!!raw-loader!./demos/formlytype/readonly-formly-type.component'),
    markup: require('!!raw-loader!./demos/formlytype/readonly-formly-type.component.html'),
    path: 'libs/documentation/src/lib/components/formly-readonly/demos/formlytype'
  },
  customtemplate: {
    title: 'Readonly Custom Templates',
    type: CustomTemplateComponent,
    code: require('!!raw-loader!./demos/customtemplate/custom-template.component'),
    markup: require('!!raw-loader!./demos/customtemplate/custom-template.component.html'),
    path: 'libs/documentation/src/lib/components/formly-readonly/demos/customtemplate'
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: {
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyReadonlyWrapperComponent',
          wrappers: ['readonly'],
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
    ReadonlyBasicModule,
    ReadonlyWrapperModule,
    ReadonlyFormlyTypeModule,
    CustomTemplateModule,
  ]
})
export class ReadonlyModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-readonly', DEMOS);
  }
}
