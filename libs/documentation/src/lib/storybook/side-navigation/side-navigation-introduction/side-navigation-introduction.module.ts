import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationIntroductionComponent } from './side-navigation-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SideNavigationIntroductionComponent],
  bootstrap: [SideNavigationIntroductionComponent],
  exports: [SideNavigationIntroductionComponent],
})
export class SideNavigationIntroductionModule {}
