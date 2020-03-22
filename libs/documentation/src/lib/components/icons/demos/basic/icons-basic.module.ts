import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsBasic } from './icons-basic.component';


@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [IconsBasic],
  exports: [IconsBasic],
  bootstrap: [IconsBasic]
})
export class IconsBasicModule {}
