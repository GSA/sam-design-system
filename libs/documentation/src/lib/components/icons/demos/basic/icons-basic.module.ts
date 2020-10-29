import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsBasic } from './icons-basic.component';
import { SdsIconModule } from '@gsa-sam/components';


@NgModule({
  imports: [CommonModule, FontAwesomeModule, SdsIconModule],
  declarations: [IconsBasic],
  exports: [IconsBasic],
  bootstrap: [IconsBasic]
})
export class IconsBasicModule {}
