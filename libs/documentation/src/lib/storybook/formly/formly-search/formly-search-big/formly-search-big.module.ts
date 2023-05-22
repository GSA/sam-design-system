import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySearchBigComponent } from './formly-search-big.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlySearchBigComponent],
  exports: [FormlySearchBigComponent],
  bootstrap: [FormlySearchBigComponent],
})
export class FormlySearchBigModule {}
