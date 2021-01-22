import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FormlyDialog } from './demos/formlymodal/formly-modal.component';
import { FormlyDialogModule } from './demos/formlymodal/formly-modal.module';

declare var require: any;
const DEMOS = {
  formlymodal: {
    title: 'Modal Dialog with Formly',
    type: FormlyDialog,
    code: require('!!raw-loader!./demos/formlymodal/formly-modal.component'),
    markup: require('!!raw-loader!./demos/formlymodal/formly-modal.component.html'),
    path: 'libs/documentation/src/lib/components/download/demos/formlymodal'
  },
  download: {
    title: 'Download Modal Dialog',
    type: DownloadComponent,
    code: require('!!raw-loader!./demos/download/download.component'),
    markup: require('!!raw-loader!./demos/download/download.component.html'),
    path: 'libs/documentation/src/lib/components/download/demos/download'
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
          pkg: 'formly',
          type: 'components',
          name: 'SdsFormlyDialogComponent'
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
    DownloadBasicModule,
    FormlyDialogModule
  ]
})
export class DownloadModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('download', DEMOS);
  }
}
