import { NgModule } from '@angular/core';
import { DocumentationSourcePage } from './source-page/source.component';
import { DocumentationTemplatePage } from './template-page/template.component';
import { DocumentationSharedModule } from '../../shared';
import { DocumentationExamplesPage } from './examples-page/examples.component';
import { DocumentationAPIPage } from './api-page/docs-api.component';
import { DocumentationAPIComponent } from './api-page/docs-api-component.component';
import { PrismModule } from '@ngx-prism/core';
import { NgbdWidgetDemoComponent } from './examples-page/demo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export * from './demo-list';

@NgModule({
  imports: [DocumentationSharedModule, PrismModule, FontAwesomeModule],
  declarations: [
    DocumentationExamplesPage, DocumentationAPIPage, DocumentationAPIComponent, DocumentationTemplatePage, DocumentationSourcePage, NgbdWidgetDemoComponent
  ],
  exports: [
    DocumentationExamplesPage, DocumentationAPIPage, DocumentationAPIComponent, DocumentationTemplatePage, DocumentationSourcePage, NgbdWidgetDemoComponent
  ]
})
export class DocumentationComponentsSharedModule {
  constructor() {
    library.add(fas, fab, sds);
  }
}
