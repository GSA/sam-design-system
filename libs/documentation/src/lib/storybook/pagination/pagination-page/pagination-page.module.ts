import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPageComponent } from './pagination-page.component';
import { PaginationModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, PaginationModule],
  declarations: [PaginationPageComponent],
  exports: [PaginationPageComponent],
  bootstrap: [PaginationPageComponent],
})
export class PaginationPageModule {}
