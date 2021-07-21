import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { IconsColoring } from './icons-coloring.component'
import { NgxBootstrapIconsModule, alarm } from 'ngx-bootstrap-icons';


@NgModule({
  imports: [CommonModule, IconModule, NgxBootstrapIconsModule.pick({alarm})],
  declarations: [IconsColoring],
  exports: [IconsColoring],
  bootstrap: [IconsColoring]
})
export class IconsColoringModule {}
