import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionPanelChildrenComponent } from './selection-panel-children.component';
import { SdsSelectionPanelModule } from '@gsa-sam/components';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  imports: [CommonModule, SdsSelectionPanelModule, RouterTestingModule],
  declarations: [SelectionPanelChildrenComponent],
  bootstrap: [SelectionPanelChildrenComponent],
  exports: [SelectionPanelChildrenComponent],
})
export class SelectionPanelChildrenModule {}
