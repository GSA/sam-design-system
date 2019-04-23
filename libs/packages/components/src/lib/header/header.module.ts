import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsHeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { SdsTopBannerComponent } from '../top-banner/top-banner.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  declarations: [SdsHeaderComponent, SdsTopBannerComponent],
  exports: [SdsHeaderComponent]
})
export class SdsHeaderModule { }
