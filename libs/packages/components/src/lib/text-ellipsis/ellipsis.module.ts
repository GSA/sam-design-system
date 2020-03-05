import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsEllipsisDirective } from './ellipsis.directive';

@NgModule({
  imports: [ CommonModule, FormsModule],
  exports: [SdsEllipsisDirective],
  declarations: [SdsEllipsisDirective],
  providers: [],
})
export class SdsEllipsisModule { }