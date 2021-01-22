
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { MultiCheckboxSelectAll} from './multicheckbox-selectall.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot()],
  declarations: [MultiCheckboxSelectAll],
  exports: [MultiCheckboxSelectAll],
  bootstrap: [MultiCheckboxSelectAll]
})
export class MultiCheckboxSelectAllModule {}
