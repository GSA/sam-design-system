import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { InputOptional } from './input-optional.component';
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
  declarations: [InputOptional],
  exports: [InputOptional],
  bootstrap: [InputOptional],
})
export class InputOptionalModule {}
