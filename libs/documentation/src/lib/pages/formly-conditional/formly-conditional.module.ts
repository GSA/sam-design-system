import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyConditionalComponent } from './formly-conditional.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';

@NgModule({
  declarations: [FormlyConditionalComponent],
  imports: [
    CommonModule,
    SdsFiltersModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormsModule,
  ],
})
export class FormlyConditionalModule {}
