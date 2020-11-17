import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsAccordionModule, SdsDialogModule, SdsIconModule, SdsSelectionPanelModule } from '@gsa-sam/components';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { SideToolbarDialogComponent } from './side-toolbar-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SdsDialogModule,
    FormsModule, 
    SdsAccordionModule, 
    SdsFiltersModule, 
    SdsSelectionPanelModule,
    SdsIconModule,
    FontAwesomeModule,
  ],
  declarations: [
    SideToolbarDialogComponent
  ],
  exports: [
    SideToolbarDialogComponent
  ],
  entryComponents: [
    SideToolbarDialogComponent
  ]
})
export class SideToolbarDialogModule {}
