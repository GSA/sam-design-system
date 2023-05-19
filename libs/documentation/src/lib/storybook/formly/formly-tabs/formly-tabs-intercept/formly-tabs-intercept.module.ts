import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTabsInterceptComponent } from './formly-tabs-intercept.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyTabsInterceptComponent],
  exports: [FormlyTabsInterceptComponent],
  bootstrap: [FormlyTabsInterceptComponent],
})
export class FormlyTabsInterceptModule {}
