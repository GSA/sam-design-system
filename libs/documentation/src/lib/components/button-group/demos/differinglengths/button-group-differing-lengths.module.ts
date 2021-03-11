import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupDifferingLengths } from './button-group-differing-lengths.component';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [CommonModule, SdsButtonGroupModule],
  declarations: [ButtonGroupDifferingLengths],
  exports: [ButtonGroupDifferingLengths],
  bootstrap: [ButtonGroupDifferingLengths],
})
export class ButtonGroupDifferingLengthsModule {}
