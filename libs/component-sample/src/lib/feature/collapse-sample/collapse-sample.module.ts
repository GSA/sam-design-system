import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseSampleComponent } from './collapse-sample.component';
import { SdsCollapseModule } from '@gsa-sam/components';


@NgModule({
  declarations: [CollapseSampleComponent],
  imports: [
    CommonModule, SdsCollapseModule
  ],
  exports: [CollapseSampleComponent]
})
export class CollapseSampleModule { }
