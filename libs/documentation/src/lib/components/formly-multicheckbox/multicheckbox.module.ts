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
import { MultiCheckboxSelectAll } from './demos/selectall/multicheckbox-selectall.component';
import { MultiCheckboxSelectAllModule } from './demos/selectall/multicheckbox-selectall.module';
import { MultiCheckboxExpandableModule } from './demos/expandable/multicheckbox-expandable.module';
import { MultiCheckboxExpandable } from './demos/expandable/multicheckbox-expandable.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Basic Form Multi Checkbox',
    type: MultiCheckboxBasic,
    code: require('!!raw-loader!./demos/basic/multicheckbox-basic.component'),
    markup: require('!!raw-loader!./demos/basic/multicheckbox-basic.component.html'),
    path:
      'libs/documentation/src/lib/components/formly-multicheckbox/demos/basic'
  },
  selectall: {
    title: 'Multi Checkbox with nesting',
    type: MultiCheckboxSelectAll,
    code: require('!!raw-loader!./demos/selectall/multicheckbox-selectall.component'),
    markup: require('!!raw-loader!./demos/selectall/multicheckbox-selectall.component.html'),
    path:
      'libs/documentation/src/lib/components/formly-multicheckbox/demos/selectall'
  },
  expandable: {
    title: 'Multi Checkbox with Select All expandable options',
    type: MultiCheckboxExpandable,
    code: require('!!raw-loader!./demos/expandable/multicheckbox-expandable.component'),
    markup: require('!!raw-loader!./demos/expandable/multicheckbox-expandable.component.html'),
    path:
      'libs/documentation/src/lib/components/formly-multicheckbox/demos/expandable'
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
      { path: 'template', component: DocumentationTemplatePage }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DocumentationComponentsSharedModule,
    MultiCheckboxBasicModule,
    MultiCheckboxSelectAllModule,
    MultiCheckboxExpandableModule
  ]
})
export class MultiCheckboxModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('multicheckbox', DEMOS);
  }
}
