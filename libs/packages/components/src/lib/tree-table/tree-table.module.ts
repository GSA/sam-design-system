import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsTreeTableComponent } from "./tree-table.component";
import { UsaTableModule } from '@gsa-sam/ngx-uswds';

@NgModule({
  imports: [
    CommonModule,
    UsaTableModule,
  ],
  declarations: [
    SdsTreeTableComponent
  ],
  exports: [
    SdsTreeTableComponent
  ]
})
export class SdsTreeTableModule {}
