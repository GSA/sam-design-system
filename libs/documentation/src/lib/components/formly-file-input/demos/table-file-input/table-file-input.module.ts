import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFileInputComponent } from './table-file-input.component';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { UsaFileInputModule } from 'ngx-uswds';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';



@NgModule({
  declarations: [TableFileInputComponent],
  imports: [
    CommonModule,
    SdsFormlyModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    UsaFileInputModule,
    SdsTableModule,
  ]
})
export class TableFileInputModule { }
