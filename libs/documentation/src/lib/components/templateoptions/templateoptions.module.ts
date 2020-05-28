import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOptionsBasic } from './demos/basic/templateoptions-basic.component';
import { DocumentationExamplesPage } from '../shared/examples-page/examples.component';
import { DocumentationAPIPage } from '../shared/api-page/docs-api.component';
import { DocumentationSourcePage } from '../shared/source-page/source.component';
import { DocumentationTemplatePage } from '../shared/template-page/template.component';
import {
  DocumentationComponentsSharedModule,
  DocumentationDemoList
} from '../shared/index';
import { ComponentWrapperComponent } from '../../shared/component-wrapper/component-wrapper.component';
import { TemplateOptionsBasicModule } from './demos/basic/templateoptions-basic.module';
import { TemplateOptionsTags } from './demos/tags/templateoption-tags.component';
import { TemplateOptionsTagsModule } from './demos/tags/templateoption-tags.module';
import { TemplateOptionsHideOptional } from './demos/hideOptional/templateoption-hideOptional.component';
import { TemplateOptionsHideOptionalModule } from './demos/hideOptional/templateoption-hideOptional.module';

declare var require: any;
const DEMOS = {
  templateOption: {
    title: 'Template Option for on blur',
    type: TemplateOptionsBasic,
    code: require('!!raw-loader!./demos/basic/templateoptions-basic.component'),
    markup: require('!!raw-loader!./demos/basic/templateoptions-basic.component.html'),
    path: 'libs/documentation/src/lib/components/templateoptions/demos/basic'
  },
  tags: {
    title: 'Template Options for tags',
    type: TemplateOptionsTags,
    code: require('!!raw-loader!./demos/tags/templateoption-tags.component'),
    markup: require('!!raw-loader!./demos/tags/templateoption-tags.component.html'),
    path: 'libs/documentation/src/lib/components/templateoptions/demos/tags'
  },
  hideOptional: {
    title: 'Template Options for hide optional text',
    type: TemplateOptionsHideOptional,
    code: require('!!raw-loader!./demos/hideOptional/templateoption-hideOptional.component'),
    markup: require('!!raw-loader!./demos/hideOptional/templateoption-hideOptional.component.html'),
    path: 'libs/documentation/src/lib/components/templateoptions/demos/hideOptional'
  },
};

export const ROUTES = [
  { path: '', pathMatch: 'full', redirectTo: 'examples' },
  {
    path: '',
    component: ComponentWrapperComponent,
    data: {
      title: 'Template Options',
      items: [
        {
          pkg: 'formly',
          type: 'components',
          name: 'FormlyLabelWrapperComponent',
          wrappers: ['templateoptions']
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
    TemplateOptionsBasicModule,
    TemplateOptionsTagsModule,
    TemplateOptionsHideOptionalModule
  ]
})
export class TemplateOptionsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('templateoptions', DEMOS);
  }
}
