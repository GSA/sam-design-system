import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsHeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { SdsTopBannerModule } from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { A11yModule } from '@angular/cdk/a11y';
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, FontAwesomeModule, A11yModule, SdsTopBannerModule
  ],
  declarations: [SdsHeaderComponent],
  exports: [SdsHeaderComponent]
})
export class SdsHeaderModule { }
