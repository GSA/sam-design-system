import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SdsSelectionPanelModule } from "@gsa-sam/components";
import { CollapsiblePanelComponent } from './collapsible-panel.component';

@NgModule({
  imports: [
    CommonModule,
    SdsSelectionPanelModule,
  ],
  declarations: [
    CollapsiblePanelComponent
  ],
  exports: [
    CollapsiblePanelComponent
  ],
  bootstrap: [
    CollapsiblePanelComponent
  ]
})
export class SelectionPanelCollapsibleModule {}
