import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsBasic } from './icons-basic.component';
import { SdsIconModule } from '@gsa-sam/components';


@NgModule({
  imports: [CommonModule, SdsIconModule],
  declarations: [IconsBasic],
  exports: [IconsBasic],
  bootstrap: [IconsBasic]
})
export class IconsBasicModule {}
