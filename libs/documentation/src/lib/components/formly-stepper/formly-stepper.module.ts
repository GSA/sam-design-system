import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { StepperAdvancedDemoComponent } from './demos/advanced/stepper-advanced.component';
import { StepperAdvancedModule } from './demos/advanced/stepper-advanced.module';
import { UswdsStepperComponent } from './demos/uswds-stepper/uswds-stepper.component';
import { UswdsStepperModule } from './demos/uswds-stepper/uswds-stepper.module';
import { OptionalStepsComponent } from './demos/optional-steps/optional-steps.component';
import { OptionalStepsModule } from './demos/optional-steps/optional-steps.module';

declare var require: any;
const DEMOS = {
  optionalStepsStepper: {
    title: 'USWDS Step Indicator - Optional Steps',
    type: OptionalStepsComponent,
    code: require('!!raw-loader!./demos/optional-steps/optional-steps.component'),
    markup: require('!!raw-loader!./demos/optional-steps/optional-steps.component.html'),
    module: require('!!raw-loader!./demos/optional-steps/optional-steps.module.ts'),
    path: 'libs/documentation/src/lib/components/formly-stepper/demos/optional-steps',
    files: [
      {name: 'optional-steps-custom-stepper.component.ts', source: require('!!raw-loader!./demos/optional-steps/optional-steps-custom-stepper.component')},
      {name: 'optional-steps-custom-stepper.component.html', source: require('!!raw-loader!./demos/optional-steps/optional-steps-custom-stepper.component.html')}
    ]
  },
  advanced: {
    title: 'Complex Formly Stepper',
    type: StepperAdvancedDemoComponent,
    code: require('!!raw-loader!./demos/advanced/stepper-advanced.component'),
    markup: require('!!raw-loader!./demos/advanced/stepper-advanced.component.html'),
    module: require('!!raw-loader!./demos/advanced/stepper-advanced.module.ts'),
    path: 'libs/documentation/src/lib/components/formly-stepper/demos/advanced',
    files: [
      {name: 'stepper-advanced.service.ts', source: require('!!raw-loader!./demos/advanced/stepper-advanced.service')},
      {name: 'custom-stepper-component.ts', source: require('!!raw-loader!./demos/advanced/custom-stepper.component')},
      {name: 'custom-stepper.component.html', source: require('!!raw-loader!./demos/advanced/custom-stepper.component.html')},
      {name: 'subawardee.component.ts', source: require('!!raw-loader!./demos/advanced/subawardee.component')},
      {name: 'subawardee.component.html', source: require('!!raw-loader!./demos/advanced/subawardee.component.html')},
    ]
  },
  uswdsStepper: {
    title: 'USWDS Step Indicator',
    type: UswdsStepperComponent,
    code: require('!!raw-loader!./demos/uswds-stepper/uswds-stepper.component'),
    markup: require('!!raw-loader!./demos/uswds-stepper/uswds-stepper.component.html'),
    module: require('!!raw-loader!./demos/uswds-stepper/uswds-stepper.module.ts'),
    path: 'libs/documentation/src/lib/components/formly-stepper/demos/uswds-stepper',
    files: [
      {name: 'uswds-custom-stepper.component.ts', source: require('!!raw-loader!./demos/uswds-stepper/uswds-custom-stepper.component')},
      {name: 'uswds-custom-stepper.component.html', source: require('!!raw-loader!./demos/uswds-stepper/uswds-custom-stepper.component.html')}
    ]
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
    StepperAdvancedModule,
    UswdsStepperModule,
    OptionalStepsModule
  ]
})
export class StepperModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-stepper', DEMOS);
  }
}
