import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsHeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { SdsTopBannerComponent } from '../top-banner/top-banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { A11yModule } from '@angular/cdk/a11y';
import { SdsDirectivesModule } from '../external-link/external-link.module';
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, FontAwesomeModule, A11yModule, SdsDirectivesModule
  ],
  declarations: [SdsHeaderComponent, SdsTopBannerComponent],
  exports: [SdsHeaderComponent]
})
export class SdsHeaderModule { }
