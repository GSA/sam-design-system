import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { StepperBasicDemoComponent } from './demos/basic/stepper-basic.component';
import { StepperBasicModule } from './demos/basic/stepper-basic.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Formly Stepper',
    type: StepperBasicDemoComponent,
    code: require('!!raw-loader!./demos/basic/stepper-basic.component'),
    markup: require('!!raw-loader!./demos/basic/stepper-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly-stepper/demos/basic'
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
          name: 'SdsStepperComponent',
          formType: 'stepper'
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
    StepperBasicModule
  ]
})
export class StepperModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-stepper', DEMOS);
  }
}
