import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsIconModule } from '@gsa-sam/components';
import { IconsColoring } from './icons-coloring.component'


@NgModule({
  imports: [CommonModule, SdsIconModule],
  declarations: [IconsColoring],
  exports: [IconsColoring],
  bootstrap: [IconsColoring]
})
export class IconsColoringModule {}
