import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SdsIconModule } from '@gsa-sam/components';
import { ButtonGroupBasic } from './button-group-basic.component';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';


@NgModule({
  imports: [CommonModule, SdsIconModule, SdsButtonGroupModule],
  declarations: [ButtonGroupBasic],
  exports: [ButtonGroupBasic],
  bootstrap: [ButtonGroupBasic]
})
export class ButtonGroupBasicModule {}
