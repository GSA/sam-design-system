import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { RadioBasic } from './radio-basic.component';
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
  declarations: [RadioBasic],
  exports: [RadioBasic],
  bootstrap: [RadioBasic],
})
export class RadioBasicModule {}
