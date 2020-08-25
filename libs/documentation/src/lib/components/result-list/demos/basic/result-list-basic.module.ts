import { NgModule } from '@angular/core';
import { SdsPageModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule } from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsActionsMenuModule } from '@gsa-sam/layouts';
import { ResultListBasic } from './result-list-basic.component';

@NgModule({
  declarations: [ResultListBasic],
  imports: [
    FontAwesomeModule,
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
