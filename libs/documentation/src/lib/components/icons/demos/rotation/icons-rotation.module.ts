import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { IconsRotation } from './icons-rotation.component'
import { NgxBootstrapIconsModule, alarm } from 'ngx-bootstrap-icons';


@NgModule({
  imports: [CommonModule, IconModule, NgxBootstrapIconsModule.pick({alarm})],
  declarations: [IconsRotation],
  exports: [IconsRotation],
  bootstrap: [IconsRotation]
})
export class IconsRotationModule {}
