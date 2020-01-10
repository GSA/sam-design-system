import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFormsComponent } from './formly-forms.component';

@NgModule({
    declarations: [FormlyFormsComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormlyModule.forRoot()
    ]
})
export class FormlyFormsModule { }