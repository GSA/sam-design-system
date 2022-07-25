import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { MultiCheckboxExpandable } from './multicheckbox-expandable.component';
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
  declarations: [MultiCheckboxExpandable],
  exports: [MultiCheckboxExpandable],
  bootstrap: [MultiCheckboxExpandable],
})
export class MultiCheckboxExpandableModule {}
