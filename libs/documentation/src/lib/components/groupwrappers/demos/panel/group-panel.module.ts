import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { GroupPanel } from './group-panel.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsIconModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsIconModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
  ],
  declarations: [GroupPanel],
  exports: [GroupPanel],
  bootstrap: [GroupPanel],
})
export class GroupPanelModule {}
