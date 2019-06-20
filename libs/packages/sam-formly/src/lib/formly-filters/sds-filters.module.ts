import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import {
    SdsAccordionModule,
} from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsFiltersComponent } from './sds-filters.component';
import { SdsFormlyModule } from '../formly/formly.module';

@NgModule({
    declarations: [
        SdsFiltersComponent,
    ],
    imports: [
        CommonModule,
        SdsAccordionModule,
        SdsFormlyModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormlySelectModule,
        FormlyModule
    ],
    exports: [SdsFiltersComponent]
})
export class SdsFiltersModule { }