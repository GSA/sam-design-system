import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyInputComponent } from './formly-input.component';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFiltersModule } from '../../../../../packages/sam-formly/src/lib/formly-filters/sds-filters.module';
@NgModule({
    declarations: [FormlyInputComponent],
    imports: [
        CommonModule,
        FormsModule,
        SdsFiltersModule,
        FormlyModule.forRoot(),
        ReactiveFormsModule

    ], exports: [FormlyInputComponent]
})
export class FormlySampleModule { }