import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioBasic } from './demos/basic/radio-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { RadioBasicModule } from './demos/basic/radio-basic.module';
import { RadioAdvancedComponent } from './demos/advanced/radio-advanced.component';
import { RadioAdvancedModule } from './demos/advanced/radio-advanced.module';
import { RadioTemplateComponent } from './demos/template/radio-template.component';
import { RadioTemplateModule } from './demos/template/radio-template.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Radio',
    type: RadioBasic,
    code: require('!!raw-loader!./demos/basic/radio-basic.component'),
    markup: require('!!raw-loader!./demos/basic/radio-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly-radio/demos/basic'
  },
  advanced: {
    title: 'Advanced Form Radio',
    type: RadioAdvancedComponent,
    code: require('!!raw-loader!./demos/advanced/radio-advanced.component'),
    markup: require('!!raw-loader!./demos/advanced/radio-advanced.component.html'),
    path: 'libs/documentation/src/lib/components/formly-radio/demos/advanced'
  },
  template: {
    title: 'Template Form Radio',
    type: RadioTemplateComponent,
    code: require('!!raw-loader!./demos/template/radio-template.component'),
    markup: require('!!raw-loader!./demos/template/radio-template.component.html'),
    path: 'libs/documentation/src/lib/components/formly-radio/demos/template'
  },
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
          name: 'FormlyFieldRadioComponent',
          formType: 'radio'
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
    RadioBasicModule,
    RadioAdvancedModule,
    RadioTemplateModule
  ]
})
export class RadioModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-radio', DEMOS);
  }
}
