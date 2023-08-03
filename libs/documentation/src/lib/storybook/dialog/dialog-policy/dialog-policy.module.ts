import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogPolicyComponent } from './dialog-policy.component';
import { SdsDialogModule } from '@gsa-sam/components';
import { DialogTemplateComponent } from './official-template.component';

@NgModule({
  imports: [
    CommonModule,
    SdsDialogModule
  ],
  declarations: [DialogPolicyComponent, DialogTemplateComponent],
  exports: [DialogPolicyComponent],
  bootstrap: [DialogPolicyComponent],
})
export class DialogPolicyModule { }
