import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationSampleComponent } from './pagination-sample.component';
import { PaginationModule } from '../../../../../packages/components/src/lib/pagination/pagination.module';

@NgModule({
  declarations: [PaginationSampleComponent],
  imports: [
    CommonModule, PaginationModule
  ], exports: [PaginationSampleComponent]
})
export class PaginationSampleModule { }
