import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SDSClickOutsideDirective } from './click-outside.directive';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SDSClickOutsideDirective],
  exports: [SDSClickOutsideDirective],
})
export class SDSClickOutsideModule {}
