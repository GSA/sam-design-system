import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTabsInterceptComponent } from './formly-tabs-intercept.component';

@NgModule({
  declarations: [FormlyTabsInterceptComponent],
  imports: [CommonModule, SdsFormlyModule, FormlyModule.forRoot()],
  exports: [FormlyTabsInterceptComponent],
  bootstrap: [FormlyTabsInterceptComponent],
})
export class FormlyTabsInterceptModule {}
