import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFiltersModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFilterNestedComponent } from './formly-filter-nested.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule,SdsFiltersModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFilterNestedComponent],
  exports: [FormlyFilterNestedComponent],
  bootstrap: [FormlyFilterNestedComponent],
})
export class FormlyFilterNestedModule {}
