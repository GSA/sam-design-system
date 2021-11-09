import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TreeTableBasicComponent } from "./tree-table-basic.component";
import { SdsTreeTableModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsTreeTableModule
  ],
  declarations: [
    TreeTableBasicComponent,
  ]
})
export class TreeTableBasicModule {}