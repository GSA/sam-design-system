import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { TemplateOptionsBasic } from './templateoptions-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [TemplateOptionsBasic],
  exports: [TemplateOptionsBasic],
  bootstrap: [TemplateOptionsBasic]
})
export class TemplateOptionsBasicModule {}
