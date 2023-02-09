import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationConfigurableComponent } from './pagination-configurable.component';
import { PaginationModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, PaginationModule],
  declarations: [PaginationConfigurableComponent],
  exports: [PaginationConfigurableComponent],
  bootstrap: [PaginationConfigurableComponent],
})
export class PaginationConfigurableModule {}
