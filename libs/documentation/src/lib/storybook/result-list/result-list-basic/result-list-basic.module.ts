import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListBasicComponent } from './result-list-basic.component';
import { SdsSearchResultListModule, SdsPageModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsSearchResultListModule, SdsPageModule],
  declarations: [ResultListBasicComponent],
  exports: [ResultListBasicComponent],
  bootstrap: [ResultListBasicComponent],
})
export class ResultListBasicModule {}
