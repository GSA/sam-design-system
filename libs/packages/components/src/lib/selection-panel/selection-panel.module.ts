
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SdsSelectionPanelComponent } from './selection-panel.component';
import { SdsSubPanelComponent } from './sub-panel/sub-panel.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ SdsSelectionPanelComponent , SdsSubPanelComponent],
  exports: [
    SdsSelectionPanelComponent,
    SdsSubPanelComponent,
  ]
})
export class SdsSelectionPanelModule { }
