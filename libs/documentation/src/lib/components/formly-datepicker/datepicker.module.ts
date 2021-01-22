import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { FormlyDatepickerBasicModule } from './demos/basic/datepicker-basic.module';
import { FormlyDatepickerBasic } from './demos/basic/datepicker-basic.component';
import { FormlyDatepickerDateRange } from './demos/daterange/datepicker-daterange.component';
import { FormlyDatepickerDateRangeModule } from './demos/daterange/datepicker-daterange.module';
import { FormlyDatepickerValidation } from './demos/validation/datepicker-validation.component';
import { FormlyDatepickerValidationModule } from './demos/validation/datepicker-validation.module';
import { FormlyDatepickerDateRangeV2 } from './demos/daterangev2/datepicker-daterangev2.component';
import { FormlyDatepickerDateRangeV2Module } from './demos/daterangev2/datepicker-daterangev2.module';

declare var require: any;
export const closing = require('!!raw-loader!./closing.md');
const DEMOS = {
  basic: {
    title: 'Basic Form Datepicker',
    type: FormlyDatepickerBasic,
    code: require('!!raw-loader!./demos/basic/datepicker-basic.component'),
    markup: require('!!raw-loader!./demos/basic/datepicker-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly-datepicker/demos/basic'
  },
  daterange: {
    title: 'Date Range picker with min,max values',
    type: FormlyDatepickerDateRange,
    code: require('!!raw-loader!./demos/daterange/datepicker-daterange.component'),
    markup: require('!!raw-loader!./demos/daterange/datepicker-daterange.component.html'),
    path: 'libs/documentation/src/lib/components/formly-datepicker/demos/daterange'
  },
  daterangev2: {
    title: 'Date Range picker for Angular 10+',
    type: FormlyDatepickerDateRangeV2,
    code: require('!!raw-loader!./demos/daterangev2/datepicker-daterangev2.component'),
    markup: require('!!raw-loader!./demos/daterangev2/datepicker-daterangev2.component.html'),
    path: 'libs/documentation/src/lib/components/formly-datepicker/demos/daterangev2'
  },
  validation: {
    title: 'Date picker with validation',
    type: FormlyDatepickerValidation,
    code: require('!!raw-loader!./demos/daterange/datepicker-daterange.component'),
    markup: require('!!raw-loader!./demos/daterange/datepicker-daterange.component.html'),
    path: 'libs/documentation/src/lib/components/formly-datepicker/demos/daterange'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: {
      title: 'Datepicker',
      readme: {
        // closing
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
    FormlyDatepickerBasicModule,
    FormlyDatepickerDateRangeModule,
    FormlyDatepickerDateRangeV2Module,
    FormlyDatepickerValidationModule
  ]
})
export class FormlyDatepickerModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-datepicker', DEMOS);
  }
}
