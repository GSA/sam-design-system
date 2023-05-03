import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFiltersModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFilterSingleComponent } from './formly-filter-single.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule,SdsFiltersModule ,FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFilterSingleComponent],
  bootstrap: [FormlyFilterSingleComponent],
  exports: [FormlyFilterSingleComponent],
})
export class FormlyFilterSingleModule {}
