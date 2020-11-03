import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsIconModule } from '@gsa-sam/components';
import { IconsBootstrap } from './icons-bootstrap.component'


@NgModule({
  imports: [CommonModule, SdsIconModule],
  declarations: [IconsBootstrap],
  exports: [IconsBootstrap],
  bootstrap: [IconsBootstrap]
})
export class IconsBootstrapModule {}
