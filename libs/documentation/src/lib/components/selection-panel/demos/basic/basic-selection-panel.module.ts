import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BasicSelectionPanelComponent } from './basic-selection-panel.component';
import {
  SdsSelectionPanelModule,
} from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsSelectionPanelModule,
  ],
  declarations: [
    BasicSelectionPanelComponent,
  ],
  exports: [
    BasicSelectionPanelComponent,
  ],
  bootstrap: [
    BasicSelectionPanelComponent
  ]
})
export class BasicSelectionPanelModule {}
