import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListCustomTemplateComponent } from './result-list-custom-template.component';
import { SdsSearchResultListModule, SdsPageModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsSearchResultListModule, SdsPageModule],
  declarations: [ResultListCustomTemplateComponent],
  bootstrap: [ResultListCustomTemplateComponent],
  exports: [ResultListCustomTemplateComponent],
})
export class ResultListCustomTemplateModule {}
