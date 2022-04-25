import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { RadioGroupComponent } from './radio-group.component';
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
  declarations: [RadioGroupComponent],
  exports: [RadioGroupComponent],
  bootstrap: [RadioGroupComponent],
})
export class RadioGroupModule {}
