import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsAccordionModule } from '@gsa-sam/components';
import { FiltersShowInactiveFilterValues } from './filters-showInactiveFilterValues.component';

@NgModule({
  declarations: [FiltersShowInactiveFilterValues],
  imports: [
    CommonModule,
    FormsModule,
    SdsAccordionModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [FiltersShowInactiveFilterValues],
  bootstrap: [FiltersShowInactiveFilterValues]
})
export class FiltersShowInactiveFilterValuesModule {}
