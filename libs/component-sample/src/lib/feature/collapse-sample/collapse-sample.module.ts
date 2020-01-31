import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseSampleComponent } from './collapse-sample.component';
import { SdsCollapseModule } from '../../../../../../libs/packages/components/src/lib/collapse/collapse.module';


@NgModule({
  declarations: [CollapseSampleComponent],
  imports: [
    CommonModule, SdsCollapseModule
  ],
  exports: [CollapseSampleComponent]
})
export class CollapseSampleModule { }
