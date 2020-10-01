import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import {
  SdsAccordionModule,
  SdsToolbarModule,
  SdsPageModule,
  SdsDialogModule
} from '@gsa-sam/components';
import {
  SdsFiltersModule,
  SdsFormlyDialogModule,
  SDSFormlyUpdateComunicationService,
  SdsFormlyModule
} from '@gsa-sam/sam-formly';

import { SideMenuFiltersSampleComponent } from './side-menu-filters-sample.component';
import { SideMenuFiltersAdvancedSampleComponent } from './side-menu-filters-advanced-sample/side-menu-filters-advanced-sample.component';
import { SideMenuFiltersToolbarSampleComponent } from './side-menu-filters-toolbar-sample/side-menu-filters-toolbar-sample.component';
import { SideMenuFiltersModelComponent } from './side-menu-filters-model/side-menu-filters-model.component';

@NgModule({
  imports: [
    CommonModule,
    SdsAccordionModule,
    SdsToolbarModule,
    SdsPageModule,
    SdsDialogModule,
    SdsFiltersModule,
    SdsFormlyDialogModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({}),
  ],
  exports: [SideMenuFiltersSampleComponent],
  declarations: [
    SideMenuFiltersSampleComponent,
    SideMenuFiltersAdvancedSampleComponent,
    SideMenuFiltersToolbarSampleComponent,
    SideMenuFiltersModelComponent
  ],
  providers: [SDSFormlyUpdateComunicationService]
})
export class SideMenuFiltersSampleModule {}
