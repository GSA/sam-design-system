import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseBasic } from './collapse-basic.component';
import { SdsCollapseModule } from '@gsa-sam/components';

@NgModule({
  declarations: [CollapseBasic],
  imports: [CommonModule, SdsCollapseModule],
  exports: [CollapseBasic],
  bootstrap: [CollapseBasic],
})
export class CollapseBasicModule {}
