import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupBasic } from './demos/basic/group-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { GroupBasicModule } from './demos/basic/group-basic.module';
import { GroupOptionalModule } from './demos/optional/group-optional.module';
import { GroupOptional } from './demos/optional/group-optional.component';

declare var require: any;
const DEMOS = {
  formfield: {
    title: 'Basic',
    type: GroupBasic,
    code: require('!!raw-loader!./demos/basic/group-basic.component'),
    markup: require('!!raw-loader!./demos/basic/group-basic.component.html'),
    path: 'libs/documentation/src/lib/components/group/demos/basic'
  },
  optionalformfield: {
    title: 'Optional',
    type: GroupOptional,
    code: require('!!raw-loader!./demos/optional/group-optional.component'),
    markup: require('!!raw-loader!./demos/optional/group-optional.component.html'),
    path: 'libs/documentation/src/lib/components/group/demos/optional'
  }
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: "Group",
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyAccordianFormFieldComponent',
          wrappers: ['group']
        }
      ]
    },
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
    GroupBasicModule,
    GroupOptionalModule
  ]
})
export class GroupWrappersModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('group', DEMOS);
  }
}
