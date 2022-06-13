import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionWrapperBasic } from './demos/basic/descriptionwrapper-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { DescriptionWrapperBasicModule } from './demos/basic/descriptionwrapper-basic.module';
import { DescriptionWrapperCustomTextModule } from './demos/custom-text/descriptionwrapper-custom-text.module';
import { DescriptionWrapperCustomText } from './demos/custom-text/descriptionwrapper-custom-text.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Description Wrapper',
    type: DescriptionWrapperBasic,
    code: require('!!raw-loader!./demos/basic/descriptionwrapper-basic.component'),
    module: require('!!raw-loader!./demos/basic/descriptionwrapper-basic.module'),
    markup: require('!!raw-loader!./demos/basic/descriptionwrapper-basic.component.html'),
    path: 'libs/documentation/src/lib/components/descriptionwrapper/demos/basic',
  },
  customText: {
    title: 'Custom HTML text Description Wrapper',
    type: DescriptionWrapperCustomText,
    code: require('!!raw-loader!./demos/custom-text/descriptionwrapper-custom-text.component'),
    module: require('!!raw-loader!./demos/custom-text/descriptionwrapper-custom-text.module'),
    markup: require('!!raw-loader!./demos/custom-text/descriptionwrapper-custom-text.component.html'),
    path: 'libs/documentation/src/lib/components/descriptionwrapper/demos/custom-text',
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: 'Description Wrapper',
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyDescriptionWrapperComponent',
          wrappers: ['description'],
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
    DescriptionWrapperBasicModule,
    DescriptionWrapperCustomTextModule,
  ],
})
export class DescriptionWrapperModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('descriptionwrapper', DEMOS);
  }
}
