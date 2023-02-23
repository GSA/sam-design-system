import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableProgrammaticControlComponent } from './tree-table-programmatic-control.component';
import { SdsTreeTableModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsTreeTableModule
  ],
  declarations: [TreeTableProgrammaticControlComponent],
  bootstrap: [TreeTableProgrammaticControlComponent],
  exports: [TreeTableProgrammaticControlComponent],
})
export class TreeTableProgrammaticControlModule { }
