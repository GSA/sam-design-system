import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { GroupAccordion } from './group-accordion.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { SdsIconModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsIconModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
  ],
  declarations: [GroupAccordion],
  exports: [GroupAccordion],
  bootstrap: [GroupAccordion],
})
export class GroupAccordionModule {}
