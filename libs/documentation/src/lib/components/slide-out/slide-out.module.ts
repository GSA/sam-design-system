import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList,
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { SlideOutBasicComponent } from './demos/basic/slide-out-basic.component';
import { SlideOutBasicModule } from './demos/basic/slide-out-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Display',
    type: SlideOutBasicComponent,
    code: require('!!raw-loader!./demos/basic/slide-out-basic.component'),
    module: require('!!raw-loader!./demos/basic/slide-out-basic.module'),
    markup: require('!!raw-loader!./demos/basic/slide-out-basic.component.html'),
    path: 'libs/documentation/src/lib/components/slide-out/demos/basic',
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
          name: 'SdsSubheaderComponent',
        },
      ],
    },
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    SlideOutBasicModule
  ],
})
export class SlideOutModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('slide-out', DEMOS);
  }
}
