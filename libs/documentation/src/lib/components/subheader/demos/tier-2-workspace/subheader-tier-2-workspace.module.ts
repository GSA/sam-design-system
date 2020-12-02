import { NgModule } from '@angular/core';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsSearchModule, SdsDialogModule, SdsIconModule } from '@gsa-sam/components';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {
  SdsFormlyModule,
  SdsFormlyDialogModule
} from '@gsa-sam/sam-formly';
import { SubheaderTier2WorkspaceComponent } from './subheader-tier-2-workspace.component';
import { SdsButtonGroupModule } from 'libs/packages/sam-material-extensions/src/lib/button-group/button-group.module';



@NgModule({
  imports: [
    CommonModule,
    SdsSubheaderModule,
    FontAwesomeModule,
    SdsSearchModule,
    SdsFormlyDialogModule,
    SdsDialogModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormlyModule,
    SdsIconModule,
    SdsButtonGroupModule
  ],
  declarations: [SubheaderTier2WorkspaceComponent],
  exports: [SubheaderTier2WorkspaceComponent],
  bootstrap: [SubheaderTier2WorkspaceComponent]
})
export class SubheaderTier2WorkspaceModule {}
