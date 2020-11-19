import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsDialogModule, SdsSelectionPanelModule } from '@gsa-sam/components';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { SideToolbarDialogComponent } from './side-toolbar-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SdsDialogModule,
    SdsFiltersModule, 
    SdsSelectionPanelModule,
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
