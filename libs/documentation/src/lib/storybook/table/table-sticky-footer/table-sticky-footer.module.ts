import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStickyFooterComponent } from './table-sticky-footer.component';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [CommonModule, SdsTableModule],
  declarations: [TableStickyFooterComponent],
  exports: [TableStickyFooterComponent],
  bootstrap: [TableStickyFooterComponent],
})
export class TableStickyFooterModule {}
