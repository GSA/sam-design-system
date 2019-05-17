import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FIELD_TYPE_COMPONENTS, FORMLY_CONFIG } from './formly.config';

@NgModule({
  declarations: [
    FIELD_TYPE_COMPONENTS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forChild(FORMLY_CONFIG),
     ],
})
export class SdsFormlyModule {}