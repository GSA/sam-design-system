import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { FileInputTemplateComponent } from './file-input-template.component';

@NgModule({
  declarations: [FileInputTemplateComponent],
  imports: [
    CommonModule,
    SdsFormlyModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    SdsTableModule,
  ],
})
export class FileInputTemplateModule {}
