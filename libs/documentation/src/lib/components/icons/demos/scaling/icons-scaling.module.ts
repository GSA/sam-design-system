import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsIconModule } from '@gsa-sam/components';
import { IconsScaling } from './icons-scaling.component'


@NgModule({
  imports: [CommonModule, SdsIconModule],
  declarations: [IconsScaling],
  exports: [IconsScaling],
  bootstrap: [IconsScaling]
})
export class IconsScalingModule {}
