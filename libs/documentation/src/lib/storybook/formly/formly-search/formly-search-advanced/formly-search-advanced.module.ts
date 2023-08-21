import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySearchAdvancedComponent } from './formly-search-advanced.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlySearchAdvancedComponent],
  exports: [FormlySearchAdvancedComponent],
  bootstrap: [FormlySearchAdvancedComponent],
})
export class FormlySearchAdvancedModule {}
