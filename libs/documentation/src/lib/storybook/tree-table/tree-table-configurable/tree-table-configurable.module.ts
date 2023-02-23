import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableConfigurableComponent } from './tree-table-configurable.component';
import { SdsTreeTableModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsTreeTableModule
  ],
  declarations: [TreeTableConfigurableComponent],
  exports: [TreeTableConfigurableComponent],
  bootstrap: [TreeTableConfigurableComponent],
})
export class TreeTableConfigurableModule { }
