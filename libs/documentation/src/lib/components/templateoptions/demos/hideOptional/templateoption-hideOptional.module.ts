import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { TemplateOptionsHideOptional } from './templateoption-hideOptional.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [TemplateOptionsHideOptional],
  exports: [TemplateOptionsHideOptional],
  bootstrap: [TemplateOptionsHideOptional]
})
export class TemplateOptionsHideOptionalModule {}
