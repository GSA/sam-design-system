import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxBasic } from './demos/basic/checkbox-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { CheckboxBasicModule } from './demos/basic/checkbox-basic.module';
import { CheckboxTemplate } from './demos/template/checkbox-template.component';
import { CheckboxTemplateModule } from './demos/template/checkbox-template.module';
import { CheckboxRadio } from './demos/checkbox-radio/checkbox-radio.component';
import { CheckboxRadioModule } from './demos/checkbox-radio/checkbox-radio.module';
import { Routes } from '@angular/router';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Checkbox',
    type: CheckboxBasic,
    code: require('!!raw-loader!./demos/basic/checkbox-basic.component'),
    markup: require('!!raw-loader!./demos/basic/checkbox-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly-checkbox/demos/basic',
  },
  checkboxradio: {
    title: 'Nested Radio Form Checkbox',
    type: CheckboxRadio,
    code: require('!!raw-loader!./demos/checkbox-radio/checkbox-radio.component'),
    markup: require('!!raw-loader!./demos/checkbox-radio/checkbox-radio.component.html'),
    path: 'libs/documentation/src/lib/components/formly-checkbox/demos/checkbox-radio',
  },
  template: {
    title: 'Template Form Checkbox',
    type: CheckboxTemplate,
    code: require('!!raw-loader!./demos/template/checkbox-template.component'),
    markup: require('!!raw-loader!./demos/template/checkbox-template.component.html'),
    path: 'libs/documentation/src/lib/components/formly-checkbox/demos/template',
  },
};

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    data: {
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyFieldCheckboxComponent',
          formType: 'checkbox',
        },
      ],
    },
    component: ComponentWrapperComponent,
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
    CheckboxBasicModule,
    CheckboxRadioModule,
    CheckboxTemplateModule,
  ],
  declarations: [],
})
export class CheckboxModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-checkbox', DEMOS);
  }
}
