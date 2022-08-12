import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { UpdateOnInheritanceComponent } from './update-on-inheritance.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FormlyModule.forRoot(), SdsFormlyModule],
  declarations: [UpdateOnInheritanceComponent],
  exports: [UpdateOnInheritanceComponent],
  bootstrap: [UpdateOnInheritanceComponent],
})
export class UpdateOnInheritanceModule {}
