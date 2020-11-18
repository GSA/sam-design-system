import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSelectionPanelModule, SdsAccordionModule, SdsDialogService, SdsDialogModule } from '@gsa-sam/components';
import { SideToolbarComponent } from './side-toolbar.component';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { SideToolbarDialogModule } from '../side-toolbar-dialog/side-toolbar-dialog.module';

@NgModule({
  declarations: [SideToolbarComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    SdsAccordionModule, 
    SdsFiltersModule, 
    SdsSelectionPanelModule,
    SdsDialogModule,
    SideToolbarDialogModule,
  ], exports: [SideToolbarComponent],
  providers: [
    SdsDialogService,
  ]
})
export class SideToolbarModule { }
