import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsFiltersModule, SdsFormlyDialogModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsAccordionModule, SdsDialogModule } from '@gsa-sam/components';
import { FiltersShowInactiveFilterValues } from './filters-showInactiveFilterValues.component';

@NgModule({
  declarations: [FiltersShowInactiveFilterValues],
  imports: [
    CommonModule,
    FormsModule,
    SdsAccordionModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    SdsDialogModule,
    SdsFormlyModule,
    SdsFormlyDialogModule,
  ],
  exports: [FiltersShowInactiveFilterValues],
  bootstrap: [FiltersShowInactiveFilterValues]
})
export class FiltersShowInactiveFilterValuesModule {}
