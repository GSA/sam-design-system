import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsIconModule } from '@gsa-sam/components';
import { IconsStackingComponent } from './icons-stacking.component'


@NgModule({
  imports: [CommonModule, SdsIconModule],
  declarations: [IconsStackingComponent],
  exports: [IconsStackingComponent],
  bootstrap: [IconsStackingComponent]
})
export class IconsStackingModule {}
