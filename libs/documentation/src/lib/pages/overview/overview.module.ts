import { NgModule } from '@angular/core';

import { OverviewComponent } from './overview.component';
import { SdsExternalLinkDirectivesModule } from '@gsa-sam/components';

@NgModule({
  imports: [SdsExternalLinkDirectivesModule],
  exports: [OverviewComponent],
  declarations: [OverviewComponent],
  providers: [],
})
export class OverviewModule {}
