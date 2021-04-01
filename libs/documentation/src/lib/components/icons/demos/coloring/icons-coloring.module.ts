import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsIconModule } from '@gsa-sam/components';
import { IconsColoring } from './icons-coloring.component'
import { NgxBootstrapIconsModule, alarm } from 'ngx-bootstrap-icons';


@NgModule({
  imports: [CommonModule, SdsIconModule, NgxBootstrapIconsModule.pick({alarm})],
  declarations: [IconsColoring],
  exports: [IconsColoring],
  bootstrap: [IconsColoring]
})
export class IconsColoringModule {}
