import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdsSelectionPanelModule } from '@gsa-sam/components';
import { DefaultSelectionPanelComponent } from './default-selection-panel.component';

@NgModule({
  imports: [CommonModule, SdsSelectionPanelModule],
  declarations: [DefaultSelectionPanelComponent],
  exports: [DefaultSelectionPanelComponent],
  bootstrap: [DefaultSelectionPanelComponent],
})
export class DefaultSelectionPanelModule {}
