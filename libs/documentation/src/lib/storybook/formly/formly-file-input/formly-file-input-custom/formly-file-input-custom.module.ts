import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFileInputComponent } from './formly-file-input-custom.component';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [TableFileInputComponent],
  imports: [
    CommonModule,
    SdsFormlyModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    SdsTableModule,
    RouterTestingModule,
  ],
  exports: [TableFileInputComponent],
  bootstrap: [TableFileInputComponent],
})
export class FormlyFileInputCustomModule {}
