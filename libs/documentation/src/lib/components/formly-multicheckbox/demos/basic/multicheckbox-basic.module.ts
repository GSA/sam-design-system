import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { MultiCheckboxBasic } from './multicheckbox-basic.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
  ],
  declarations: [MultiCheckboxBasic],
  exports: [MultiCheckboxBasic],
  bootstrap: [MultiCheckboxBasic],
})
export class MultiCheckboxBasicModule {}
