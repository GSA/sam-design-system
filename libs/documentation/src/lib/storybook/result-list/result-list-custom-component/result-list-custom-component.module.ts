import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListCustomComponentComponent } from './result-list-custom-component.component';
import { SdsSearchResultListModule, SdsPageModule } from '@gsa-sam/components';
import { ListComponentComponent } from './list-component/list-component.component';

@NgModule({
  imports: [CommonModule, SdsSearchResultListModule, SdsPageModule],
  declarations: [ResultListCustomComponentComponent, ListComponentComponent],
  exports: [ResultListCustomComponentComponent, ListComponentComponent],
  bootstrap: [ResultListCustomComponentComponent],
})
export class ResultListCustomComponentModule {}
