import { SdsFormlyModule } from '../../../../../../../packages/sam-formly/src/lib/formly/formly.module';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { GroupAccordion } from './group-accordion.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [GroupAccordion],
  exports: [GroupAccordion],
  bootstrap: [GroupAccordion]
})
export class GroupAccordionModule {}
