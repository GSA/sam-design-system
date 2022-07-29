import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { FormlyTabsBasicModule } from './demos/basic/formly-tabs-basic.module';
import { FormlyTabsBasicComponent } from './demos/basic/formly-tabs-basic.component';
import { FormlyTabsInterceptComponent } from './demos/intercept/formly-tabs-intercept.component';
import { FormlyTabsInterceptModule } from './demos/intercept/formly-tabs-intercept.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Formly Tabs',
    type: FormlyTabsBasicComponent,
    code: require('!!raw-loader!./demos/basic/formly-tabs-basic.component'),
    markup: require('!!raw-loader!./demos/basic/formly-tabs-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly-tabs/demos/basic',
  },
  interrupt: {
    title: 'interceptTabChange',
    type: FormlyTabsInterceptComponent,
    code: require('!!raw-loader!./demos/intercept/formly-tabs-intercept.component'),
    markup: require('!!raw-loader!./demos/intercept/formly-tabs-intercept.component.html'),
    path: 'libs/documentation/src/lib/components/formly-tabs/demos/intercept',
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
          name: 'FormlyFieldTabsComponent',
          formType: 'tabs',
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
  imports: [CommonModule, DocumentationComponentsSharedModule, FormlyTabsBasicModule, FormlyTabsInterceptModule],
})
export class FormlyTabsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('formly-tabs', DEMOS);
  }
}
