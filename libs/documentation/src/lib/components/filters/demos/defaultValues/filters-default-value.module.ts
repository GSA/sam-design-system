import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFiltersModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FiltersDefaultValueComponent } from './filters-default-value.component';

@NgModule({
  imports: [CommonModule, FormsModule, SdsFiltersModule, FormlyModule.forRoot(), ReactiveFormsModule],
  declarations: [FiltersDefaultValueComponent],
  exports: [FiltersDefaultValueComponent],
  bootstrap: [FiltersDefaultValueComponent],
})
export class FiltersDefaultValueModule {}
