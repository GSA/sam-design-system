import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyWrapperGroupPanelComponent } from './formly-wrapper-group-panel.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyWrapperGroupPanelComponent],
  exports: [FormlyWrapperGroupPanelComponent],
  bootstrap: [FormlyWrapperGroupPanelComponent],
})
export class FormlyWrapperGroupPanelModule {}
