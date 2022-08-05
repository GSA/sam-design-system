import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationBasic } from './pagination-basic.component';
import { PaginationModule } from '@gsa-sam/components';

@NgModule({
  declarations: [PaginationBasic],
  imports: [CommonModule, PaginationModule],
  exports: [PaginationBasic],
  bootstrap: [PaginationBasic],
})
export class PaginationBasicModule {}
