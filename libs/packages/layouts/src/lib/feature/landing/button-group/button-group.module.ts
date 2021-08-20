import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsLandingButtonGroupComponent } from './button-group.component';
import { SdsIconModule } from '@gsa-sam/components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, SdsIconModule],
  exports: [SdsLandingButtonGroupComponent],
  declarations: [SdsLandingButtonGroupComponent],
  providers: [],
})
export class SdsLandingButtonGroupModule { }
