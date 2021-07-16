import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ngx-uswds-icons';
import { IconsUswds } from './icons-uswds.component'


@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [IconsUswds],
  exports: [IconsUswds],
  bootstrap: [IconsUswds]
})
export class IconsUswdsModule {}
