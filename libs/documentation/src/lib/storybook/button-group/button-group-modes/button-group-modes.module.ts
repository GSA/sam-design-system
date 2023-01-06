import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';
import { ButtonGroupModesComponent } from './button-group-modes.component';

@NgModule({
  imports: [CommonModule, SdsButtonGroupModule],
  declarations: [ButtonGroupModesComponent],
  exports: [ButtonGroupModesComponent],
  bootstrap: [ButtonGroupModesComponent],
})
export class ButtonGroupModesModule {}
