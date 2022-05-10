import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SDSTabOutsideDirective } from './taboutside.directive';
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SDSTabOutsideDirective],
  exports: [SDSTabOutsideDirective],
})
export class SdsTabOutsideModule {}
