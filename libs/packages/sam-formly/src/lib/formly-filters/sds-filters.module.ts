import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { SdsFiltersComponent } from './sds-filters.component';
import { SdsFormlyModule } from '../formly/formly.module';
import { SdsFormlyResetModule } from '../formly-reset/formly-reset.module';
import { AdvancedFiltersComponent } from './advanced-filters/advanced-filters.component';
import { SDSFormlyUpdateModelService } from './service/sds-filter-model-update.service';
import { IconModule } from 'ngx-uswds-icons';
import { NgxBootstrapIconsModule, filter } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [SdsFiltersComponent, AdvancedFiltersComponent],
  imports: [
    CommonModule,
    FormsModule,
    SdsFormlyModule,
    SdsFormlyResetModule,
    IconModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule,
    NgxBootstrapIconsModule.pick({filter})
  ],
  exports: [SdsFiltersComponent],
  providers: [SDSFormlyUpdateModelService],
})
export class SdsFiltersModule {}
