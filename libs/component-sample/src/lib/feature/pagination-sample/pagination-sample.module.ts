import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationSampleComponent } from './pagination-sample.component';

@NgModule({
  declarations: [PaginationSampleComponent],
  imports: [
    CommonModule
  ], exports: [PaginationSampleComponent]
})
export class PaginationSampleModule { }
