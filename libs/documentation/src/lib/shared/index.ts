import { HighlightComponent } from './highlight/highlight.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentWrapperComponent } from './component-wrapper/component-wrapper.component';
import { MarkdownModule } from 'ngx-markdown';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [CommonModule, RouterModule, MarkdownModule, HighlightModule],
  exports: [
    CommonModule,
    RouterModule,
    ComponentWrapperComponent,
    HighlightComponent,
  ],
  declarations: [ComponentWrapperComponent, HighlightComponent],
  providers: [],
})
export class DocumentationSharedModule {}
