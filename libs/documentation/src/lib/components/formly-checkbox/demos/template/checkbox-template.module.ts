import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { CheckboxTemplate } from './checkbox-template.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule, questionOctagon } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
    IconModule,
    NgxBootstrapIconsModule.pick({ questionOctagon }),
  ],
  declarations: [CheckboxTemplate],
  exports: [CheckboxTemplate],
  bootstrap: [CheckboxTemplate],
})
export class CheckboxTemplateModule {}
