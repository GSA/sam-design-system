import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';
import { ButtonGroupCheckedComponent } from './button-group-checked.component';

@NgModule({
  imports: [CommonModule, SdsButtonGroupModule],
  declarations: [ButtonGroupCheckedComponent],
  exports: [ButtonGroupCheckedComponent],
  bootstrap: [ButtonGroupCheckedComponent],
})
export class ButtonGroupCheckedModule {}
