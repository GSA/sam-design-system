import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { TemplateOptionsBasic } from './templateoptions-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@sam-design-system/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [TemplateOptionsBasic],
  exports: [TemplateOptionsBasic],
  bootstrap: [TemplateOptionsBasic]
})
export class TemplateOptionsBasicModule {}
