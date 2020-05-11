import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../../shared/index';
import { ComponentWrapperComponent } from '../../../shared/component-wrapper/component-wrapper.component';
import { FormlyDatepickerBasicModule } from './demos/basic/datepicker-basic.module';
import { FormlyDatepickerBasic } from './demos/basic/datepicker-basic.component';

declare var require: any;
export const closing = require('!!raw-loader!./closing.md');
const DEMOS = {
  basic: {
    title: 'Basic Form Datepicker',
    type: FormlyDatepickerBasic,
    code: require('!!raw-loader!./demos/basic/datepicker-basic.component'),
    markup: require('!!raw-loader!./demos/basic/datepicker-basic.component.html'),
    path: 'libs/documentation/src/lib/components/datepicker/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: {
      title: 'Datepicker',
      readme: {
        closing
      },
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyFieldDatePickerComponent',
          formType: 'datepicker'
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
    FormlyDatepickerBasicModule
  ]
})
export class FormlyDatepickerModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-datepicker', DEMOS);
  }
}
