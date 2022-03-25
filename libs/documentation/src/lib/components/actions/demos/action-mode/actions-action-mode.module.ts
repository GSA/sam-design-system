import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsMenuActionMode } from './actions-action-mode.component';
import { SdsActionsMenuModule } from '@gsa-sam/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [ActionsMenuActionMode],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
    SdsActionsMenuModule,
  ],
  exports: [ActionsMenuActionMode],
  bootstrap: [ActionsMenuActionMode],
})
export class ActionsMenuActionModeModule {}
