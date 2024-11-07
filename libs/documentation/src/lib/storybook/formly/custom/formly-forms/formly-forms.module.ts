import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFormsComponent } from './formly-forms.component';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule, plusCircle } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
    IconModule,
    NgxBootstrapIconsModule.pick({ plusCircle }),
  ],
  declarations: [FormlyFormsComponent],
  exports: [FormlyFormsComponent],
  bootstrap: [FormlyFormsComponent],
})
export class FormlyFormsModule {}
