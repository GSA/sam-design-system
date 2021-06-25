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
import { StepperAdvancedDemoComponent } from './demos/advanced/stepper-advanced.component';
import { StepperAdvancedModule } from './demos/advanced/stepper-advanced.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Formly Stepper',
    type: StepperBasicDemoComponent,
    code: require('!!raw-loader!./demos/basic/stepper-basic.component'),
    markup: require('!!raw-loader!./demos/basic/stepper-basic.component.html'),
    module: require('!!raw-loader!./demos/basic/stepper-basic.module.ts'),
    path: 'libs/documentation/src/lib/components/formly-stepper/demos/basic'
  },
  advanced: {
    title: 'Complex Formly Stepper',
    type: StepperAdvancedDemoComponent,
    code: require('!!raw-loader!./demos/advanced/stepper-advanced.component'),
    markup: require('!!raw-loader!./demos/advanced/stepper-advanced.component.html'),
    module: require('!!raw-loader!./demos/advanced/stepper-advanced.module.ts'),
    path: 'libs/documentation/src/lib/components/formly-stepper/demos/advanced'
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
    StepperBasicModule,
    StepperAdvancedModule,
  ]
})
export class StepperModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-stepper', DEMOS);
  }
}
