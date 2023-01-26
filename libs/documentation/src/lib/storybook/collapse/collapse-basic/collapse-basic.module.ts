import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseBasicComponent } from './collapse-basic.component';
import { SdsCollapseModule } from '@gsa-sam/components';
import { bootstrap } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [CommonModule, SdsCollapseModule],
  exports: [CollapseBasicComponent],
  declarations: [CollapseBasicComponent],
  bootstrap: [CollapseBasicComponent],
})
export class CollapseBasicModule {}
