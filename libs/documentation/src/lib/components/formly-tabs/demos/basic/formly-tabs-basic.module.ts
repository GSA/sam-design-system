import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyTabsBasicComponent } from './formly-tabs-basic.component';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [FormlyTabsBasicComponent],
  imports: [CommonModule, SdsFormlyModule, FormlyModule.forRoot()],
  exports: [FormlyTabsBasicComponent],
  bootstrap: [FormlyTabsBasicComponent],
})
export class FormlyTabsBasicModule {}
