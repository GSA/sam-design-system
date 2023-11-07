import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchOverviewComponent } from './search-overview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchOverviewComponent],
  exports: [SearchOverviewComponent],
  bootstrap: [SearchOverviewComponent],
})
export class SearchOverviewModule {}
