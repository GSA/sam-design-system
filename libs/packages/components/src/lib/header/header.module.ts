import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TopBannerComponent } from '../top-banner/top-banner.component';

@NgModule({
  declarations: [HeaderComponent, TopBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
