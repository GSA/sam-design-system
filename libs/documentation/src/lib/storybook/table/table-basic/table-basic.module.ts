import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBasicComponent } from './table-basic.component';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [
    CommonModule,
    SdsTableModule
  ],
  declarations: [TableBasicComponent],
  exports: [TableBasicComponent],
  bootstrap: [TableBasicComponent],
})
export class TableBasicModule { }
