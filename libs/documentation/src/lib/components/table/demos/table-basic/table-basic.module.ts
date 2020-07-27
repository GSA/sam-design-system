import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBasicComponent } from './table-basic.component';

@NgModule({
  declarations: [TableBasicComponent],
  imports: [
    CommonModule
  ],
  exports: [TableBasicComponent],
  bootstrap: [TableBasicComponent]
})
export class TableBasicModule { }
