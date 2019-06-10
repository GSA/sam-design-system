import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FORMLY_COMPONENTS, FORMLY_ROUTES } from './formly.routes';
import { SdsFormlyModule } from '@sam-design-system/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SdsFormlyModule,
        FormlyModule.forRoot(),
        ReactiveFormsModule,
        RouterModule.forChild(FORMLY_ROUTES),
    ],
    declarations: [
        ...FORMLY_COMPONENTS
    ]
})

export class FormlySampleModule { }
