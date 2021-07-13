import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { DatePipeBasicComponent } from './demos/basic/date-pipe-basic/date-pipe-basic.component';
import { DatePipeBasicModule } from './demos/basic/date-pipe-basic/date-pipe-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Date Pipe',
    type: DatePipeBasicComponent,
    code: require('!!raw-loader!./demos/basic/date-pipe-basic/date-pipe-basic.component'),
    markup: require('!!raw-loader!./demos/basic/date-pipe-basic/date-pipe-basic.component.html'),
    module: require('!!raw-loader!./demos/basic/date-pipe-basic/date-pipe-basic.module'),
    path: 'libs/documentation/src/lib/components/date-pipe/demos/basic/date-pipe-basic',
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
          name: 'SdsButtonGroupComponent',
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
    DatePipeBasicModule
  ],
})
export class DatePipeModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('date-pipe', DEMOS);
  }
}
