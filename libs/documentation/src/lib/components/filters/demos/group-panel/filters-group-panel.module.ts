import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';
import { FiltersGroupPanel } from './filters-group-panel.component';

@NgModule({
  declarations: [FiltersGroupPanel],
  imports: [
    CommonModule,
    FormsModule,
    SdsAccordionModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [FiltersGroupPanel],
  bootstrap: [FiltersGroupPanel],
})
export class FiltersGroupPanelModule {}
