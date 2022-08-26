import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { InputPrefixSuffix } from './prefix-suffix.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [InputPrefixSuffix],
  exports: [InputPrefixSuffix],
  bootstrap: [InputPrefixSuffix],
})
export class InputPrefixSuffixModule {}
