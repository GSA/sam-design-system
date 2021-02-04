import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverviewComponent } from './overview.component';
import { SdsExternalLinkDirectivesModule } from '@gsa-sam/components';

@NgModule({
  imports: [FontAwesomeModule, SdsExternalLinkDirectivesModule],
  exports: [OverviewComponent],
  declarations: [OverviewComponent],
  providers: [],
})
export class OverviewModule {}
