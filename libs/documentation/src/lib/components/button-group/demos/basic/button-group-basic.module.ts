import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonGroupBasic } from './button-group-basic.component';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';


@NgModule({
  imports: [CommonModule, FontAwesomeModule, SdsButtonGroupModule],
  declarations: [ButtonGroupBasic],
  exports: [ButtonGroupBasic],
  bootstrap: [ButtonGroupBasic]
})
export class ButtonGroupBasicModule {}
