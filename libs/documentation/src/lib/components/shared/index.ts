import { NgModule } from '@angular/core';
import { DocumentationSourcePage } from './source-page/source.component';
import { DocumentationTemplatePage } from './template-page/template.component';
import { DocumentationSharedModule } from '../../shared';
import { DocumentationExamplesPage } from './examples-page/examples.component';
import { DocumentationAPIPage } from './api-page/docs-api.component';
import { DocumentationAPIComponent } from './api-page/docs-api-component.component';
import { PrismModule } from '@ngx-prism/core';
import { NgbdWidgetDemoComponent } from './examples-page/demo.component';

export * from './demo-list';

@NgModule({
  imports: [DocumentationSharedModule, PrismModule],
  declarations: [
    DocumentationExamplesPage, DocumentationAPIPage, DocumentationAPIComponent, DocumentationTemplatePage, DocumentationSourcePage, NgbdWidgetDemoComponent
  ],
  exports: [
    DocumentationExamplesPage, DocumentationAPIPage, DocumentationAPIComponent, DocumentationTemplatePage, DocumentationSourcePage, NgbdWidgetDemoComponent
  ]
})
export class DocumentationComponentsSharedModule {}
