import { NgModule } from '@angular/core';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { OverviewComponent } from './overview.component';
import { SdsExternalLinkDirectivesModule } from '@gsa-sam/components';

@NgModule({
  imports: [IconModule, SdsExternalLinkDirectivesModule],
  exports: [OverviewComponent],
  declarations: [OverviewComponent],
  providers: [],
})
export class OverviewModule {}
