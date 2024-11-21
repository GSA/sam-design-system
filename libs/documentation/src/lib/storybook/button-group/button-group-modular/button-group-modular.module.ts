import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule, gridFill, list } from 'ngx-bootstrap-icons';
import { ButtonGroupModularComponent } from './button-group-modular.component';

@NgModule({
  imports: [CommonModule, SdsButtonGroupModule, IconModule, NgxBootstrapIconsModule.pick({ gridFill, list })],
  declarations: [ButtonGroupModularComponent],
  exports: [ButtonGroupModularComponent],
  bootstrap: [ButtonGroupModularComponent],
})
export class ButtonGroupModularModule {}
