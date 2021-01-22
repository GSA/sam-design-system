import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { TemplateOptionsTags } from './templateoption-tags.component';
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
  declarations: [TemplateOptionsTags],
  exports: [TemplateOptionsTags],
  bootstrap: [TemplateOptionsTags]
})
export class TemplateOptionsTagsModule {}
