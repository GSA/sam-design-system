import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsIconModule } from '@gsa-sam/components';
import { IconsRotation } from './icons-rotation.component'


@NgModule({
  imports: [CommonModule, SdsIconModule],
  declarations: [IconsRotation],
  exports: [IconsRotation],
  bootstrap: [IconsRotation]
})
export class IconsRotationModule {}
