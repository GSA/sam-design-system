import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { IconsScaling } from './icons-scaling.component';

@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [IconsScaling],
  exports: [IconsScaling],
  bootstrap: [IconsScaling],
})
export class IconsScalingModule {}
