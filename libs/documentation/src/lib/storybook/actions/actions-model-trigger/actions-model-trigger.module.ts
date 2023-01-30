import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsModelTriggerComponent } from './actions-model-trigger.component';
import { SdsActionsMenuModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsActionsMenuModule],
  declarations: [ActionsModelTriggerComponent],
  exports: [ActionsModelTriggerComponent],
  bootstrap: [ActionsModelTriggerComponent],
})
export class ActionsModelTriggerModule {}
