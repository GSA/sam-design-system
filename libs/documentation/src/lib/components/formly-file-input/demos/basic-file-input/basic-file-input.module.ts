import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFileInputComponent } from './basic-file-input.component';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [BasicFileInputComponent],
  imports: [
    CommonModule,
    SdsFormlyModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
  ],
  exports: [
    BasicFileInputComponent
  ],
  bootstrap: [
    BasicFileInputComponent
  ]
})
export class BasicFileInputModule { }
