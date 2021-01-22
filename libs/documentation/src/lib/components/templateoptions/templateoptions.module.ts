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
import { TemplateOptionHideOptional } from './demos/hideOptional/templateoption-hideOptional.component';
import { TemplateOptionsHideOptionalModule } from './demos/hideOptional/templateoption-hideOptional.module';
import { TemplateOptionExpand } from './demos/expand/templateoption-expand.component';
import { TemplateOptionsExpandModule } from './demos/expand/templateoption-expand.module';
import { TemplateOptionAnnounceLabel } from './demos/announceLabel/templateoption-announceLabel.component';
import { TemplateOptionsAnnounceLabelModule } from './demos/announceLabel/templateoption-announceLabel.module';
import { UpdateOnInheritanceModule } from './demos/updateoninheritance/update-on-inheritance.module';
import { UpdateOnInheritanceComponent } from './demos/updateoninheritance/update-on-inheritance.component';

declare var require: any;
const DEMOS = {
  basic: {
    title: 'Template Option for on blur',
    type: TemplateOptionsBasic,
    code: require('!!raw-loader!./demos/basic/templateoptions-basic.component'),
    markup: require('!!raw-loader!./demos/basic/templateoptions-basic.component.html'),
    path: 'libs/documentation/src/lib/components/templateoptions/demos/basic'
  },
  updateoninhereitance: {
    title: 'UpdateOn Inheritance',
    type: UpdateOnInheritanceComponent,
    code: require('!!raw-loader!./demos/updateoninheritance/update-on-inheritance.component'),
    markup: require('!!raw-loader!./demos/updateoninheritance/update-on-inheritance.component.html'),
    path: 'libs/documentation/src/lib/components/templateoptions/demos/updateoninheritance'
  },
  tags: {
    title: 'Template Options for tags',
    type: TemplateOptionsTags,
    code: require('!!raw-loader!./demos/tags/templateoption-tags.component'),
    markup: require('!!raw-loader!./demos/tags/templateoption-tags.component.html'),
    path: 'libs/documentation/src/lib/components/templateoptions/demos/tags'
  },
  hideOptional: {
    title: 'Template Options for hide (optional) text',
    type: TemplateOptionHideOptional,
    code: require('!!raw-loader!./demos/hideOptional/templateoption-hideOptional.component'),
    markup: require('!!raw-loader!./demos/hideOptional/templateoption-hideOptional.component.html'),
    path: 'libs/documentation/src/lib/components/templateoptions/demos/hideOptional'
  },
  expand: {
    title: 'Template Options for expand',
    type: TemplateOptionExpand,
    code: require('!!raw-loader!./demos/expand/templateoption-expand.component'),
    markup: require('!!raw-loader!./demos/expand/templateoption-expand.component.html'),
    path: 'libs/documentation/src/lib/components/templateoptions/demos/expand'
  },
  announceLabel: {
    title: 'Template Options for announce label for screen reader',
    type: TemplateOptionAnnounceLabel,
    code: require('!!raw-loader!./demos/announceLabel/templateoption-announceLabel.component'),
    markup: require('!!raw-loader!./demos/announceLabel/templateoption-announceLabel.component.html'),
    path: 'libs/documentation/src/lib/components/templateoptions/demos/announceLabel'
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
    TemplateOptionsHideOptionalModule,
    TemplateOptionsExpandModule,
    TemplateOptionsAnnounceLabelModule,
    UpdateOnInheritanceModule
  ]
})
export class TemplateOptionsModule {
  constructor(demoList: DocumentationDemoList) {
    demoList.register('templateoptions', DEMOS);
  }
}
