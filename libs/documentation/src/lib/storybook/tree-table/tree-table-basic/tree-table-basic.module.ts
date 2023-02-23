import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableBasicComponent } from './tree-table-basic.component';
import { SdsTreeTableModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsTreeTableModule
  ],
  declarations: [TreeTableBasicComponent],
  exports: [TreeTableBasicComponent],
  bootstrap: [TreeTableBasicComponent],
})
export class TreeTableBasicModule { }
