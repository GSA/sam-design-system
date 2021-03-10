import { HighlightModule } from 'ngx-highlightjs';
import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from '@angular/core';
import { DocumentationSourcePage } from './source-page/source.component';
import { DocumentationTemplatePage } from './template-page/template.component';
import { DocumentationSharedModule } from '../../shared';
import { DocumentationExamplesPage } from './examples-page/examples.component';
import { DocumentationAPIPage } from './api-page/docs-api.component';
import { DocumentationAPIComponent } from './api-page/docs-api-component.component';
import { DocumentationWidgetDemoComponent } from './examples-page/demo.component';

import { sds } from '@gsa-sam/sam-styles/src/icons/';

import { SdsIconModule, SdsTabsModule } from '@gsa-sam/components';

export * from './demo-list';

@NgModule({
  imports: [DocumentationSharedModule,  MarkdownModule, HighlightModule, SdsIconModule, SdsTabsModule,],
  declarations: [
    DocumentationExamplesPage, DocumentationAPIPage, DocumentationAPIComponent, DocumentationTemplatePage, DocumentationSourcePage, DocumentationWidgetDemoComponent
  ],
  exports: [
    DocumentationExamplesPage, DocumentationAPIPage, DocumentationAPIComponent, DocumentationTemplatePage, DocumentationSourcePage, DocumentationWidgetDemoComponent
  ]
})
export class DocumentationComponentsSharedModule {

}
