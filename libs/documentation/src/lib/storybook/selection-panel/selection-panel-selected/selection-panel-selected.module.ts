import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionPanelSelectedComponent } from './selection-panel-selected.component';
import { SdsSelectionPanelModule } from '@gsa-sam/components';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  imports: [CommonModule, SdsSelectionPanelModule, RouterTestingModule],
  declarations: [SelectionPanelSelectedComponent],
  bootstrap: [SelectionPanelSelectedComponent],
  exports: [SelectionPanelSelectedComponent],
})
export class SelectionPanelSelectedModule {}
