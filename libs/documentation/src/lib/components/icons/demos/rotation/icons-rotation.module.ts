import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsIconModule } from '@gsa-sam/components';
import { IconsRotation } from './icons-rotation.component'
import { NgxBootstrapIconsModule, alarm } from 'ngx-bootstrap-icons';


@NgModule({
  imports: [CommonModule, SdsIconModule, NgxBootstrapIconsModule.pick({alarm})],
  declarations: [IconsRotation],
  exports: [IconsRotation],
  bootstrap: [IconsRotation]
})
export class IconsRotationModule {}
