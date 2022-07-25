import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFormsComponent } from './formly-forms.component';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';

@NgModule({
  declarations: [FormlyFormsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFiltersModule,
    FormsModule,
    FormlyModule.forRoot(),
  ],
})
export class FormlyFormsModule {}
