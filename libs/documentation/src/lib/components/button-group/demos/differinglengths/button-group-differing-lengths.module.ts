import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { ButtonGroupDifferingLengths } from './button-group-differing-lengths.component';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [CommonModule, IconModule, SdsButtonGroupModule],
  declarations: [ButtonGroupDifferingLengths],
  exports: [ButtonGroupDifferingLengths],
  bootstrap: [ButtonGroupDifferingLengths],
})
export class ButtonGroupDifferingLengthsModule {}
