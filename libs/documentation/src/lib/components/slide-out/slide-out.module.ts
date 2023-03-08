import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from './../shared/index';
import { ComponentWrapperComponent } from './../../shared/component-wrapper/component-wrapper.component';
import { SlideOutBasicComponent } from './demos/basic/slide-out-basic.component';
import { SlideOutBasicModule } from './demos/basic/slide-out-basic.module';
import { SlideOutTemplateRefComponent } from './demos/template-ref/slide-out-template-ref.component';
import { SlideOutTemplateRefModule } from './demos/template-ref/slide-out-template-ref.module';
import { SlideOutCustomHeaderModule } from './demos/custom-header/custom-header.module';
import { SlideOutCustomHeaderComponent } from './demos/custom-header/custom-header.component';
import { Routes } from '@angular/router';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Slide Out',
    type: SlideOutBasicComponent,
    code: require('!!raw-loader!./demos/basic/slide-out-basic.component'),
    module: require('!!raw-loader!./demos/basic/slide-out-basic.module'),
    markup: require('!!raw-loader!./demos/basic/slide-out-basic.component.html'),
    path: 'libs/documentation/src/lib/components/slide-out/demos/basic',
  },
  templateRef: {
    title: 'Slide Out - Template Ref',
    type: SlideOutTemplateRefComponent,
    code: require('!!raw-loader!./demos/template-ref/slide-out-template-ref.component'),
    module: require('!!raw-loader!./demos/template-ref/slide-out-template-ref.module'),
    markup: require('!!raw-loader!./demos/template-ref/slide-out-template-ref.component.html'),
    path: 'libs/documentation/src/lib/components/slide-out/demos/template-ref',
  },

  customHeader: {
    title: 'Slide Out - Custom header',
    type: SlideOutCustomHeaderComponent,
    code: require('!!raw-loader!./demos/custom-header/custom-header.component'),
    module: require('!!raw-loader!./demos/custom-header/custom-header.module'),
    markup: require('!!raw-loader!./demos/custom-header/custom-header.component.html'),
    path: 'libs/documentation/src/lib/components/slide-out/demos/custom-header',
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
          pkg: 'components',
          type: 'components',
          name: 'SdsDialogContainerComponent',
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
    SlideOutBasicModule,
    SlideOutTemplateRefModule,
    SlideOutCustomHeaderModule,
  ],
})
export class SlideOutModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('slide-out', DEMOS);
  }
}
