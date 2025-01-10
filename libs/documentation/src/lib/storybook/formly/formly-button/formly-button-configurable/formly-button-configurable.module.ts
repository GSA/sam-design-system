import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyButtonConfigurableComponent } from './formly-button-configurable.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { info, infoCircle, NgxBootstrapIconsModule, plusCircle } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
    IconModule,
    NgxBootstrapIconsModule.pick({ plusCircle, infoCircle, info }),
  ],
  declarations: [FormlyButtonConfigurableComponent],
  exports: [FormlyButtonConfigurableComponent],
  bootstrap: [FormlyButtonConfigurableComponent],
})
export class FormlyButtonConfigurableModule {}
