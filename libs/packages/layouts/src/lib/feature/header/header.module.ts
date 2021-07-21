import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsHeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { SdsTopBannerModule } from '@gsa-sam/components';

import { A11yModule } from '@angular/cdk/a11y';
import { NgxBootstrapIconsModule, square, justifyLeft, circle, circleFill } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IconModule,
    A11yModule,
    SdsTopBannerModule,
    NgxBootstrapIconsModule.pick({square, justifyLeft, circle, circleFill})
  ],
  declarations: [SdsHeaderComponent],
  exports: [SdsHeaderComponent]
})
export class SdsHeaderModule { }
