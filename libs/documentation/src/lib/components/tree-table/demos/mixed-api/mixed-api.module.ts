import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsTreeTableModule } from '@gsa-sam/components';
import { TreeTableMixedApiComponent } from "./mixed-api.component";

@NgModule({
  imports: [
    CommonModule,
    SdsTreeTableModule,
  ],
  declarations: [
    TreeTableMixedApiComponent,
  ]
})
export class TreeTableMixedApiModule {}