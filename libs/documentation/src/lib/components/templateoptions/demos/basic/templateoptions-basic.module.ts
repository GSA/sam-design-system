import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { TemplateOptionsBasic } from './templateoptions-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FormlyModule.forRoot(), SdsFormlyModule],
  declarations: [TemplateOptionsBasic],
  exports: [TemplateOptionsBasic],
  bootstrap: [TemplateOptionsBasic],
})
export class TemplateOptionsBasicModule {}
