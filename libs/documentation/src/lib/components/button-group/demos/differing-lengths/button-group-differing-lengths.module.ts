import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SdsButtonGroupModule} from '../../../../../../../packages/sam-material-extensions/src/lib/button-group/button-group.module'
import { ButtonGroupDifferingLengths } from './button-group-differing-lengths.component';


@NgModule({
  imports: [CommonModule, FontAwesomeModule, SdsButtonGroupModule],
  declarations: [ButtonGroupDifferingLengths],
  exports: [ButtonGroupDifferingLengths],
  bootstrap: [ButtonGroupDifferingLengths]
})
export class ButtonGroupDifferingLengthsModule {}
