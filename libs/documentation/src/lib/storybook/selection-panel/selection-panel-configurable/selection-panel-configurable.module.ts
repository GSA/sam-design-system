import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionPanelConfigurableComponent } from './selection-panel-configurable.component';
import { SdsSelectionPanelModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsSelectionPanelModule],
  declarations: [SelectionPanelConfigurableComponent],
  exports: [SelectionPanelConfigurableComponent],
  bootstrap: [SelectionPanelConfigurableComponent],
})
export class SelectionPanelConfigurableModule {}
