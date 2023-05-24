import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAlertTypeComponent } from './dialog-alert-type.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsDialogModule } from '@gsa-sam/components';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { DialogAlertTypeTemplate } from './dialog-template.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot(), SdsDialogModule
  ],
  declarations: [DialogAlertTypeComponent, DialogAlertTypeTemplate],
  exports: [DialogAlertTypeComponent],
  bootstrap: [DialogAlertTypeComponent],
})
export class DialogAlertTypeModule { }
