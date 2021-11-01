import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsLandingButtonGroupComponent } from './button-group.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  imports: [CommonModule, RouterModule, IconModule],
  exports: [SdsLandingButtonGroupComponent],
  declarations: [SdsLandingButtonGroupComponent],
  providers: [],
})
export class SdsLandingButtonGroupModule { }
