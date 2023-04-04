import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsSizeComponent } from './actions-size.component';
import { SdsActionsMenuModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsActionsMenuModule],
  declarations: [ActionsSizeComponent],
  exports: [ActionsSizeComponent],
  bootstrap: [ActionsSizeComponent],
})
export class ActionsSizeModule {}
