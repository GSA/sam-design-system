import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { TemplateOptionHideOptional } from './templateoption-hideOptional.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [TemplateOptionHideOptional],
  exports: [TemplateOptionHideOptional],
  bootstrap: [TemplateOptionHideOptional]
})
export class TemplateOptionsHideOptionalModule {}
