import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyDialogComponent } from './formly-dialog.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFiltersModule } from '@sam-design-system/sam-formly';
import { SdsAccordionModule } from '@gsa-sam/components';

@NgModule({
  declarations: [FormlyDialogComponent],
  imports: [
    CommonModule,
    SdsFiltersModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormsModule,
    SdsAccordionModule,
  ]
})
export class FormlyDialogModule { }
