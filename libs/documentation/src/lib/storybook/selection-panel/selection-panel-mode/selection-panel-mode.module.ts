import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionPanelModeComponent } from './selection-panel-mode.component';
import { SdsSelectionPanelModule } from '@gsa-sam/components';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  imports: [CommonModule, SdsSelectionPanelModule, RouterTestingModule],
  declarations: [SelectionPanelModeComponent],
  exports: [SelectionPanelModeComponent],
  bootstrap: [SelectionPanelModeComponent],
})
export class SelectionPanelModeModule {}
