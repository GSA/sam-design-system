import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExpansionComponent } from './table-expansion.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [CommonModule, SdsTableModule, IconModule],
  declarations: [TableExpansionComponent],
  exports: [TableExpansionComponent],
})
export class TableExpansionModule {}
