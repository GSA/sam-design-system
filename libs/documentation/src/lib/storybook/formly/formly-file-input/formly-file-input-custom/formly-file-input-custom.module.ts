import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFileInputCustomComponent } from './formly-file-input-custom.component';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [TableFileInputCustomComponent],
  imports: [
    CommonModule,
    SdsFormlyModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    SdsTableModule,
    RouterTestingModule,
  ],
  exports: [TableFileInputCustomComponent],
  bootstrap: [TableFileInputCustomComponent],
})
export class FormlyFileInputCustomModule {}
