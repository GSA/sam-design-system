import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { SdsAccordionModule } from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsFiltersComponent } from './sds-filters.component';
import { SdsFormlyModule } from '../formly/formly.module';
import { SdsFormlyResetModule } from '../formly-reset/formly-reset.module';
import { AdvancedFiltersComponent } from './advanced-filters/advanced-filters.component';

@NgModule({
  declarations: [SdsFiltersComponent, AdvancedFiltersComponent],
  imports: [
    CommonModule,
    FormsModule,
    SdsAccordionModule,
    SdsFormlyModule,
    SdsFormlyResetModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule
  ],
  exports: [SdsFiltersComponent],
  providers: []
})
export class SdsFiltersModule {}
