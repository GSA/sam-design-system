import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { FilterAlignComponent } from './filter-align.component';
import { SdsAccordionModule } from '@gsa-sam/components';
@NgModule({
    declarations: [FilterAlignComponent],
    imports: [
        CommonModule,
        FormsModule,
        SdsAccordionModule,
        SdsFiltersModule,
        FormlyModule.forRoot(),
        ReactiveFormsModule

    ], exports: [FilterAlignComponent]
})
export class FilterAlignSampleModule { }