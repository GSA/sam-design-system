import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyTextAreaSizesComponent } from './formly-text-area-sizes.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [FormlyTextAreaSizesComponent],
  exports: [FormlyTextAreaSizesComponent],
  bootstrap: [FormlyTextAreaSizesComponent],
})
export class FormlyTextAreaSizesModule {}
