
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SdsAccordionModule } from '../accordion/accordion.module';
import { SdsSelectionPanelComponent } from './selection-panel.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, SdsAccordionModule
  ],
  declarations: [ SdsSelectionPanelComponent ],
  exports: [
    SdsSelectionPanelComponent,
  ]
})
export class SdsSelectionPanelModule { }
