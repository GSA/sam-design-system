import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { DatePipeBasicComponent } from './demos/basic/date-pipe-basic/date-pipe-basic.component';
import { DatePipeBasicModule } from './demos/basic/date-pipe-basic/date-pipe-basic.module';
import { DatePipeLinkToSbModule } from './demos/date-pipe-link-to-sb/date-pipe-link-to-sb.module';
import { DatePipeLinkToSbComponent } from './demos/date-pipe-link-to-sb/date-pipe-link-to-sb.component';
import { Routes } from '@angular/router';

declare var require: any;
const DEMOS = {
  linkToSb: {
    title: 'New Demos',
    type: DatePipeLinkToSbComponent,
    code: require('!!raw-loader!./demos/date-pipe-link-to-sb/date-pipe-link-to-sb.component'),
    markup: require('!!raw-loader!./demos/date-pipe-link-to-sb/date-pipe-link-to-sb.component.html'),
    module: require('!!raw-loader!./demos/date-pipe-link-to-sb/date-pipe-link-to-sb.module'),
    path: 'libs/documentation/src/lib/components/date-pipe/demos/date-pipe-link-to-sb',
  },
  basic: {
    title: 'Date Pipe',
    type: DatePipeBasicComponent,
    code: require('!!raw-loader!./demos/basic/date-pipe-basic/date-pipe-basic.component'),
    markup: require('!!raw-loader!./demos/basic/date-pipe-basic/date-pipe-basic.component.html'),
    module: require('!!raw-loader!./demos/basic/date-pipe-basic/date-pipe-basic.module'),
    path: 'libs/documentation/src/lib/components/date-pipe/demos/basic/date-pipe-basic',
  },
};

export const ROUTES: Routes = [
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
  imports: [CommonModule, DocumentationComponentsSharedModule, DatePipeBasicModule, DatePipeLinkToSbModule],
})
export class DatePipeModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('date-pipe', DEMOS);
  }
}
