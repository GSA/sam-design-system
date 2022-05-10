import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsSelectionPanelModule } from '@gsa-sam/components';
import { SelectionModeComponent } from './selection-mode.component';

@NgModule({
  imports: [CommonModule, SdsSelectionPanelModule],
  declarations: [SelectionModeComponent],
  exports: [SelectionModeComponent],
  bootstrap: [SelectionModeComponent],
})
export class SelectionModeSelectionPanelModule {}
