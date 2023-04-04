import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListConfigurableComponent } from './result-list-configurable.component';
import { SdsPageModule, SdsSearchResultListModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsSearchResultListModule, SdsPageModule],
  declarations: [ResultListConfigurableComponent],
  exports: [ResultListConfigurableComponent],
  bootstrap: [ResultListConfigurableComponent],
})
export class ResultListConfigurableModule {}
