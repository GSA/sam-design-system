import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { ButtonGroupBasic } from './button-group-basic.component';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [CommonModule, IconModule, SdsButtonGroupModule],
  declarations: [ButtonGroupBasic],
  exports: [ButtonGroupBasic],
  bootstrap: [ButtonGroupBasic],
})
export class ButtonGroupBasicModule {}
