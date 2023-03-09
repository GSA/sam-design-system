import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsLabelComponent } from './actions-label.component';
import { SdsActionsMenuModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsActionsMenuModule],
  declarations: [ActionsLabelComponent],
  exports: [ActionsLabelComponent],
  bootstrap: [ActionsLabelComponent],
})
export class ActionsLabelModule {}
