import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { PopupBasicModule } from './demos/basic/popup-basic.module';
import { PopupBasic } from './demos/basic/popup-basic.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Popup / Tooltip',
    type: PopupBasic,
    code: require('!!raw-loader!./demos/basic/popup-basic.component'),
    module: require('!!raw-loader!./demos/basic/popup-basic.module'),
    markup: require('!!raw-loader!./demos/basic/popup-basic.component.html'),
    path: 'libs/documentation/src/lib/components/popup/demos/basic',
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
          pkg: 'components',
          type: 'directives',
          name: 'SdsPopupDirective',
        },
      ],
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    PopupBasicModule,
  ],
})
export class PopupModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('popup', DEMOS);
  }
}
