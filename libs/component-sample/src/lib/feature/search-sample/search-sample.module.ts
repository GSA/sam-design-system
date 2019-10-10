import { NgModule } from '@angular/core';

import { SearchSampleComponent } from './search-sample.component';
import { SdsSearchModule } from '@gsa-sam/components';

@NgModule({
  imports: [SdsSearchModule],
  exports: [],
  declarations: [SearchSampleComponent],
  providers: []
})
export class SearchSampleModule {}
