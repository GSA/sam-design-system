import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {
  SdsAccordionModule, SdsToolbarModule, SdsPageModule, SdsDialogModule
} from '@gsa-sam/components';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';

import { SideMenuFiltersSampleComponent } from './side-menu-filters-sample.component';
import { SideMenuFiltersAdvancedSampleComponent } from './side-menu-filters-advanced-sample/side-menu-filters-advanced-sample.component';
import { SideMenuFiltersToolbarSampleComponent } from './side-menu-filters-toolbar-sample/side-menu-filters-toolbar-sample.component';
import { SideMenuFiltersAdvancedDialogSampleComponent } from './side-menu-filters-advanced-sample/side-menu-filters-advanced-dialog-sample/side-menu-filters-advanced-dialog-sample.component';

@NgModule({
  imports: [
    SdsAccordionModule,
    SdsToolbarModule,
    SdsPageModule,
    CommonModule,
    FormsModule,
    SdsDialogModule,
    SdsFiltersModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      extras: { immutable: true }
    })
  ],
  exports: [SideMenuFiltersSampleComponent],
  declarations: [
    SideMenuFiltersAdvancedDialogSampleComponent,
    SideMenuFiltersSampleComponent,
    SideMenuFiltersAdvancedSampleComponent,
    SideMenuFiltersToolbarSampleComponent,
    SideMenuFiltersAdvancedDialogSampleComponent
  ],
  entryComponents: [SideMenuFiltersAdvancedDialogSampleComponent],
  providers: []
})
export class SideMenuFiltersSampleModule {}
