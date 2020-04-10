import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { IconsBasicModule } from './demos/basic/icons-basic.module';
import { IconsBasic } from './demos/basic/icons-basic.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'All Custom Icons',
    type: IconsBasic,
    code: require('!!raw-loader!./demos/basic/icons-basic.component'),
    markup: require('!!raw-loader!./demos/basic/icons-basic.component.html'),
    path: 'libs/documentation/src/lib/components/icons/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    IconsBasicModule
  ]
})
export class IconsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('icons', DEMOS);
  }
}
