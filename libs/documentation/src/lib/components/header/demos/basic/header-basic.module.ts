import { NgModule } from '@angular/core';
import { HeaderBasic } from './header-basic.component';
import { SdsHeaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';
import { SystemAlertModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsHeaderModule, SystemAlertModule, ],
  declarations: [HeaderBasic],
  exports: [HeaderBasic],
  bootstrap: [HeaderBasic]
})
export class HeaderBasicModule {}
