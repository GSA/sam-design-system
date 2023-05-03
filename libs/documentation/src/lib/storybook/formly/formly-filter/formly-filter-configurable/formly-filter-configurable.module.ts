import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFilterConfigurableComponent } from './formly-filter-configurable.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFiltersModule, SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule,SdsFiltersModule, FormlyModule.forRoot()],
  declarations: [FormlyFilterConfigurableComponent],
  exports: [FormlyFilterConfigurableComponent],
  bootstrap: [FormlyFilterConfigurableComponent],
})
export class FormlyFilterConfigurableModule {}
