import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCustomFooterComponent } from './table-custom-footer.component';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [
    CommonModule,
    SdsTableModule,
  ],
  declarations: [TableCustomFooterComponent],
  exports: [TableCustomFooterComponent],
})
export class TableCustomFooterModule { }
