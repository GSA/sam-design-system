import { NgModule } from '@angular/core';
import { SdsIconModule, SdsPageModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule } from '@gsa-sam/components';

import { SdsActionsMenuModule } from '@gsa-sam/layouts';
import { ResultListTemplate } from './result-list-template.component';

@NgModule({
  declarations: [ResultListTemplate],
  imports: [
    SdsIconModule,
    CommonModule,
    FormsModule,
    SdsPageModule,
    SdsSearchResultListModule,
    SdsActionsMenuModule
  ],
  exports: [ResultListTemplate],
  bootstrap: [ResultListTemplate]
})
export class ResultListTemplateModule {}
