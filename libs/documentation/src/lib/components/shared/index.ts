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
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export * from './demo-list';

@NgModule({
  imports: [DocumentationSharedModule, FontAwesomeModule, MarkdownModule, HighlightModule],
  declarations: [
    DocumentationExamplesPage, DocumentationAPIPage, DocumentationAPIComponent, DocumentationTemplatePage, DocumentationSourcePage, DocumentationWidgetDemoComponent
  ],
  exports: [
    DocumentationExamplesPage, DocumentationAPIPage, DocumentationAPIComponent, DocumentationTemplatePage, DocumentationSourcePage, DocumentationWidgetDemoComponent
  ]
})
export class DocumentationComponentsSharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, sds);
    //  library.add(fas, fab, sds);
  }
}
