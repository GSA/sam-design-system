import { NgModule } from '@angular/core';
import { SdsIconModule, SdsPageModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule } from '@gsa-sam/components';

import { SdsActionsMenuModule } from '@gsa-sam/layouts';
import { ResultListBasic } from './result-list-basic.component';
import { NgxBootstrapIconsModule, book } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [ResultListBasic],
  imports: [
    SdsIconModule,
    CommonModule,
    FormsModule,
    SdsPageModule,
    SdsSearchResultListModule,
    SdsActionsMenuModule,
    NgxBootstrapIconsModule.pick({book})
  ],
  exports: [ResultListBasic],
  bootstrap: [ResultListBasic]
})
export class ResultListBasicModule {}
