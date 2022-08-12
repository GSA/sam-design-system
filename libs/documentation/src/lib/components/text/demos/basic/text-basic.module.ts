import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBasic } from './text-basic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsTextModule } from '@gsa-sam/components';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [TextBasic],
  imports: [
    CommonModule,
    FormsModule,
    SdsTextModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
  ],
  exports: [TextBasic],
  bootstrap: [TextBasic],
})
export class TextBasicModule {}
