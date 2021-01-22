import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonGroupDifferingLengths } from './button-group-differing-lengths.component';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';


@NgModule({
  imports: [CommonModule, FontAwesomeModule, SdsButtonGroupModule],
  declarations: [ButtonGroupDifferingLengths],
  exports: [ButtonGroupDifferingLengths],
  bootstrap: [ButtonGroupDifferingLengths]
})
export class ButtonGroupDifferingLengthsModule {}
