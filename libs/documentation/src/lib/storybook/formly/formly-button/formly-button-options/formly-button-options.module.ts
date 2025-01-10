import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyButtonOptionsComponent } from './formly-button-options.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule, plusCircle } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SdsFormlyModule, FormsModule, FormlyModule.forRoot(), IconModule,
    NgxBootstrapIconsModule.pick({ plusCircle }),],
  declarations: [FormlyButtonOptionsComponent],
  exports: [FormlyButtonOptionsComponent],
  bootstrap: [FormlyButtonOptionsComponent],
})
export class FormlyButtonOptionsModule {}
