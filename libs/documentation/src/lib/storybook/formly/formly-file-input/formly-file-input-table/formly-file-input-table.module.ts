import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFileInputComponent } from './formly-file-input-table.component';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  declarations: [TableFileInputComponent],
  imports: [CommonModule, SdsFormlyModule, ReactiveFormsModule, FormlyModule.forRoot(), SdsTableModule],
  exports: [TableFileInputComponent],
  bootstrap: [TableFileInputComponent],
})
export class FormlyFileInputTableModule {}
