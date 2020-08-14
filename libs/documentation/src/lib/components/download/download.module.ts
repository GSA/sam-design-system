import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared';
import { DownloadBasic } from './demos/basic/download-basic.component';
import { DownloadBasicModule } from './demos/basic/download-basic.module';
import { SdsDownloadDisplayComponent } from './demos/basic/download-modal-display.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Modal Download',
    type: DownloadBasic,
    code: require('!!raw-loader!./demos/basic/download-basic.component'),
    markup: require('!!raw-loader!./demos/basic/download-basic.component.html'),
    path: 'libs/documentation/src/lib/components/download/demos/basic'
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
          name: 'SdsDownloadModalComponent'
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
  ],
  exports: [SdsDownloadDisplayComponent],
  declarations: []
})
export class DownloadModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('download', DEMOS);
  }
}
