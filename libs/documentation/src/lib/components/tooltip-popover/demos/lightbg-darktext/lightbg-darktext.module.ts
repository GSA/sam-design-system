import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdsTooltipModule } from '@gsa-sam/components';
import { LightbgDarktext } from './lightbg-darktext.component';
import { NgxBootstrapIconsModule, exclamationCircle } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [LightbgDarktext],
  imports: [CommonModule, IconModule, SdsTooltipModule, NgxBootstrapIconsModule.pick({ exclamationCircle })],
  exports: [LightbgDarktext],
  bootstrap: [LightbgDarktext],
})
export class LightbgDarktextModule {}