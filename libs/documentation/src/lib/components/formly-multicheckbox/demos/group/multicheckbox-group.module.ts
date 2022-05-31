import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { MultiCheckboxGroup } from './multicheckbox-group.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [MultiCheckboxGroup],
  exports: [MultiCheckboxGroup],
  bootstrap: [MultiCheckboxGroup],
})
export class MultiCheckboxGroupModule {}
