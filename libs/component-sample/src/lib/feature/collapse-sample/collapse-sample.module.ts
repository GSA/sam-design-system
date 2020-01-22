import { NgModule } from "@angular/core";
import { CollapseSampleComponent } from './collapse-sample.component';
import { CommonModule } from '@angular/common';
import { SdsCollapseModule } from '../../../../../packages/components/src/lib/collapse/collapse.module';

@NgModule({
  declarations: [CollapseSampleComponent],
  imports: [
    CommonModule, SdsCollapseModule
  ],
  exports: [CollapseSampleComponent]
})

export class CollapseSampleModule {}
