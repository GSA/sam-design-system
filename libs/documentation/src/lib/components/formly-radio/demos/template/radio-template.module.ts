import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule, uswdsAttachMoney, uswdsIdentification } from '@gsa-sam/ngx-uswds-icons';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { RadioTemplateComponent } from './radio-template.component';
import { award } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
    IconModule,
    NgxBootstrapIconsModule.pick({ uswdsAttachMoney, uswdsIdentification, award }),
  ],
  declarations: [RadioTemplateComponent],
  exports: [RadioTemplateComponent],
  bootstrap: [RadioTemplateComponent],
})
export class RadioTemplateModule {}
