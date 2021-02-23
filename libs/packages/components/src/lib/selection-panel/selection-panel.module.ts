
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SdsSelectionPanelComponent } from './selection-panel.component';
import { SdsSubPanelComponent } from './sub-panel/sub-panel.component';
import { SdsSelectionPanelSelectionModeComponent } from './select/selection-mode.component';
import { SdsSelectionPanelNavigationModeComponent } from './navigation-mode/navigation-mode.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ 
    SdsSelectionPanelComponent , 
    SdsSubPanelComponent, 
    SdsSelectionPanelSelectionModeComponent, 
    SdsSelectionPanelNavigationModeComponent
  ],
  exports: [
    SdsSelectionPanelComponent,
    SdsSubPanelComponent,
  ]
})
export class SdsSelectionPanelModule { }
