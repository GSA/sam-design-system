import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsBasic } from './icons-basic.component';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';


@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [IconsBasic],
  exports: [IconsBasic],
  bootstrap: [IconsBasic]
})
export class IconsBasicModule {}
