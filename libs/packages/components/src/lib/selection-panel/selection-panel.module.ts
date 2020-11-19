
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SdsSelectionPanelComponent } from './selection-panel.component';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ SdsSelectionPanelComponent ],
  exports: [
    SdsSelectionPanelComponent,
  ]
})
export class SdsSelectionPanelModule { }
