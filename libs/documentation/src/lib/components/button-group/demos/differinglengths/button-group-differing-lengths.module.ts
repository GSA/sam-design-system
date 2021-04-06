import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SdsIconModule } from '@gsa-sam/components';
import { ButtonGroupDifferingLengths } from './button-group-differing-lengths.component';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';


@NgModule({
  imports: [CommonModule, SdsIconModule, SdsButtonGroupModule],
  declarations: [ButtonGroupDifferingLengths],
  exports: [ButtonGroupDifferingLengths],
  bootstrap: [ButtonGroupDifferingLengths]
})
export class ButtonGroupDifferingLengthsModule {}
