import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ngx-uswds-icons';
import { IconsBootstrap } from './icons-bootstrap.component'


@NgModule({
  imports: [CommonModule, IconModule],
  declarations: [IconsBootstrap],
  exports: [IconsBootstrap],
  bootstrap: [IconsBootstrap]
})
export class IconsBootstrapModule {}
