import { NgModule } from '@angular/core';
import { HeaderBasic } from './header-basic.component';
import { SdsHeaderModule } from '@gsa-sam/layouts';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, SdsHeaderModule],
  declarations: [HeaderBasic],
  exports: [HeaderBasic],
  bootstrap: [HeaderBasic]
})
export class HeaderBasicModule {}
