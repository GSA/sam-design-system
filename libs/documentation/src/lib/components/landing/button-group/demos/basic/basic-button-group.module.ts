import { NgModule } from '@angular/core';
import { BasicButtonGroupComponent } from './basic-button-group.component';
import { SdsLandingButtonGroupModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, SdsLandingButtonGroupModule],
  declarations: [BasicButtonGroupComponent],
  exports: [BasicButtonGroupComponent],
  bootstrap: [BasicButtonGroupComponent]
})
export class BasicButtonGroupModule {}
