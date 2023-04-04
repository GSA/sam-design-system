import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationLinkToSbComponent } from './pagination-link-to-sb.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaginationLinkToSbComponent],
  exports: [PaginationLinkToSbComponent],
  bootstrap: [PaginationLinkToSbComponent],
})
export class PaginationLinkToSbModule {}
