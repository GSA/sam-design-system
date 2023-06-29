import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHighlightRowComponent } from './table-highlight-row.component';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [CommonModule, SdsTableModule],
  declarations: [TableHighlightRowComponent],
  exports: [TableHighlightRowComponent],
})
export class TableHighlightRowModule {}
