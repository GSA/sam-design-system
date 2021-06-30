import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicFileInputComponent } from './basic-file-input.component';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { UsaFileInputModule } from 'ngx-uswds';


@NgModule({
  declarations: [BasicFileInputComponent],
  imports: [
    CommonModule,
    SdsFormlyModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    UsaFileInputModule,
  ],
  exports: [
    BasicFileInputComponent
  ],
  bootstrap: [
    BasicFileInputComponent
  ]
})
export class BasicFileInputModule { }
