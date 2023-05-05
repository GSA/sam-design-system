import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFiltersModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFilterHideExpressionComponent } from './formly-filter-hideexpression.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule,SdsFiltersModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyFilterHideExpressionComponent],
  exports: [FormlyFilterHideExpressionComponent],
  bootstrap: [FormlyFilterHideExpressionComponent],
})
export class FormlyFilterHideExpressionModule {}
