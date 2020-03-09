import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiCheckboxBasic } from './demos/basic/multicheckbox-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { MultiCheckboxBasicModule } from './demos/basic/multicheckbox-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Multi Checkbox',
    type: MultiCheckboxBasic,
    code: require('!!raw-loader!./demos/basic/multicheckbox-basic.component'),
    markup: require('!!raw-loader!./demos/basic/multicheckbox-basic.component.html'),
    path: 'libs/documentation/src/lib/components/multicheckbox/demos/basic'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: {
      items: [
        {
          pkg: 'formly',
          type: "textarea",
          component: 'FormlyFieldMultiCheckboxComponent'
        }
      ]
    },
    component: ComponentWrapperComponent,
    children: [
      { path: 'examples', component: DocumentationExamplesPage },
      { path: 'api', component: DocumentationAPIPage },
      { path: 'source', component: DocumentationSourcePage },
      { path: 'template', component: DocumentationTemplatePage },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    MultiCheckboxBasicModule
  ]
})
export class MultiCheckboxModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('multicheckbox', DEMOS);
  }
}
