import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { TemplateOptionsTags } from './templateoption-tags.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [TemplateOptionsTags],
  exports: [TemplateOptionsTags],
  bootstrap: [TemplateOptionsTags]
})
export class TemplateOptionsTagsModule {}
