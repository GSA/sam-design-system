import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FileInputValidationComponent } from './file-input-validation.component';


@NgModule({
  declarations: [FileInputValidationComponent],
  imports: [
    CommonModule,
    SdsFormlyModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
  ],
  exports: [
    FileInputValidationComponent
  ],
  bootstrap: [
    FileInputValidationComponent
  ]
})
export class FileInputValidationModule { }
