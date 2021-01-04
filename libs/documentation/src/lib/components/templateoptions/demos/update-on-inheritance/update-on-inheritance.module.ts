import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { UpdateOnInheritanceComponent } from './update-on-inheritance.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [UpdateOnInheritanceComponent],
  exports: [UpdateOnInheritanceComponent],
  bootstrap: [UpdateOnInheritanceComponent]
})
export class UpdateOnInheritanceModule {}
