import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyEllipsisComponent } from './formly-ellipsis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { SdsEllipsisModule } from '@gsa-sam/components';
import {SdsReadMoreModule} from '@gsa-sam/components'

@NgModule({
  declarations: [FormlyEllipsisComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    SdsFiltersModule,
    FormlyModule.forRoot(),
    ReactiveFormsModule,
    SdsEllipsisModule,
    SdsReadMoreModule
  ], exports: [FormlyEllipsisComponent]
})
export class FormlyEllipsisModule { }
