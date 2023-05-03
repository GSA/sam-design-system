import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFiltersModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFilterBasicComponent } from './formly-filter-basic.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, SdsFiltersModule ,FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFilterBasicComponent],
  exports: [FormlyFilterBasicComponent],
  bootstrap: [FormlyFilterBasicComponent],
})
export class FormlyFilterBasicModule {}
