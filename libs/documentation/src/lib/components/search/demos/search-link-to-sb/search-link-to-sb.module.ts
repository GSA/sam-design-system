import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLinkToSbComponent } from './search-link-to-sb.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchLinkToSbComponent],
  exports: [SearchLinkToSbComponent],
  bootstrap: [SearchLinkToSbComponent],
})
export class SearchLinkToSbModule {}
