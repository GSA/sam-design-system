import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DescriptionWrapperCustomText } from './descriptionwrapper-custom-text.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [DescriptionWrapperCustomText],
  exports: [DescriptionWrapperCustomText],
  bootstrap: [DescriptionWrapperCustomText],
})
export class DescriptionWrapperCustomTextModule {}
