import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsBasic } from './actions-basic.component';
import { SdsActionsMenuModule } from '@sam-design-system/layouts';


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
