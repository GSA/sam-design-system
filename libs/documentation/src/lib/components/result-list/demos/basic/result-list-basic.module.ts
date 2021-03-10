import { NgModule } from '@angular/core';
import { SdsIconModule, SdsPageModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule } from '@gsa-sam/components';

import { SdsActionsMenuModule } from '@gsa-sam/layouts';
import { ResultListBasic } from './result-list-basic.component';

@NgModule({
  declarations: [ResultListBasic],
  imports: [
    SdsIconModule,
    CommonModule,
    FormsModule,
    SdsPageModule,
    SdsSearchResultListModule,
    SdsActionsMenuModule
  ],
  exports: [ResultListBasic],
  bootstrap: [ResultListBasic]
})
export class ResultListBasicModule {}
