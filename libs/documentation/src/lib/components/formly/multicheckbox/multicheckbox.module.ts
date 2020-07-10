import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiCheckboxBasic } from './demos/basic/multicheckbox-basic.component';
import { DocumentationExamplesPage } from '../../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../../shared/template-page/template.component';
import { DocumentationComponentsSharedModule, DocumentationDemoList } from '../../shared/index';
import { ComponentWrapperComponent } from '../../../shared/component-wrapper/component-wrapper.component';
import { MultiCheckboxBasicModule } from './demos/basic/multicheckbox-basic.module';
import { MultiCheckboxSelectAll } from './demos/selectAll/multicheckbox-selectall.component';
import { MultiCheckboxSelectAllModule } from './demos/selectAll/multicheckbox-selectall.module';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Multi Checkbox',
    type: MultiCheckboxBasic,
    code: require('!!raw-loader!./demos/basic/multicheckbox-basic.component'),
    markup: require('!!raw-loader!./demos/basic/multicheckbox-basic.component.html'),
    path: 'libs/documentation/src/lib/components/formly/multicheckbox/demos/basic'
  },
  selectall: {
    title: 'Multi Checkbox with nesting',
    type: MultiCheckboxSelectAll,
    code: require('!!raw-loader!./demos/selectall/multicheckbox-selectall.component'),
    markup: require('!!raw-loader!./demos/selectall/multicheckbox-selectall.component.html'),
    path: 'libs/documentation/src/lib/components/formly/multicheckbox/demos/selectall'
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
          name: 'FormlyFieldMultiCheckboxComponent',
          formType: 'multicheckbox'
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
    MultiCheckboxBasicModule,
    MultiCheckboxSelectAllModule
  ]
})
export class MultiCheckboxModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('multicheckbox', DEMOS);
  }
}
