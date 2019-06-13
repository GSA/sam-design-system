import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '../../../../../packages/sam-formly/src/lib/formly/formly.module';
import { FormlyInputComponent } from './formly-input.component';
import { FormlyModule } from '@ngx-formly/core';
@NgModule({
    declarations: [FormlyInputComponent],
    imports: [
        CommonModule,
        FormsModule,
        SdsFormlyModule,
        FormlyModule.forRoot(),
        ReactiveFormsModule

    ], exports: [FormlyInputComponent]
})
export class FormlySampleModule { }