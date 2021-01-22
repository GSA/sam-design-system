import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { TemplateOptionHideOptional } from './templateoption-hideOptional.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot(),
    SdsFormlyModule,
  ],
  declarations: [TemplateOptionHideOptional],
  exports: [TemplateOptionHideOptional],
  bootstrap: [TemplateOptionHideOptional]
})
export class TemplateOptionsHideOptionalModule {}
