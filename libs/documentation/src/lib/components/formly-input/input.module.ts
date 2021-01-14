import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBasic } from './demos/basic/input-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { InputBasicModule } from './demos/basic/input-basic.module';
import { InputOptionalModule } from './demos/optional/input-optional.module';
import { InputOptional } from './demos/optional/input-optional.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Input',
    type: InputBasic,
    code: require('!!raw-loader!./demos/basic/input-basic.component'),
    markup: require('!!raw-loader!./demos/basic/input-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly-input/demos/basic'
  },
  optional: {
    title: 'Optional Form Input',
    type: InputOptional,
    code: require('!!raw-loader!./demos/optional/input-optional.component'),
    markup: require('!!raw-loader!./demos/optional/input-optional.component.html'),
    path: 'libs/documentation/src/lib/components/formly-input/demos/optional'
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
          type: 'components',
          name: 'FormlyFieldInputComponent',
          formType: 'input'
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
    InputBasicModule,
    InputOptionalModule
  ]
})
export class InputModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('input', DEMOS);
  }
}
