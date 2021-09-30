import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsBasic } from './actions-basic.component';
import { SdsActionsMenuModule } from '@gsa-sam/components';


@NgModule({
  declarations: [ActionsBasic],
  imports: [
    CommonModule,
    SdsActionsMenuModule
  ],
  exports: [ActionsBasic],
  bootstrap: [ActionsBasic]
})
export class ActionsBasicModule {}
