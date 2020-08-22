import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBasic } from './demos/basic/dialog-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
``;
import { DownloadComponent } from './demos/download/download.component';
import { DownloadBasicModule } from './demos/download/download.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Download Modal Dialog',
    type: DownloadComponent,
    code: require('!!raw-loader!./demos/download/download.component'),
    markup: require('!!raw-loader!./demos/download/download.component.html'),
    path: 'libs/documentation/src/lib/components/dialog/demos/download'
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
          pkg: 'layouts',
          type: 'components',
          name: 'SdsDialogContainerComponent'
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
    DownloadBasicModule
  ]
})
export class DownloadModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('download', DEMOS);
  }
}
