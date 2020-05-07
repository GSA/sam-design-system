import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverviewComponent } from './overview.component';
import { SdsDirectivesModule } from '@gsa-sam/components';

@NgModule({
  imports: [FontAwesomeModule, SdsDirectivesModule], 
  exports: [OverviewComponent],
  declarations: [OverviewComponent],
  providers: []
})
export class OverviewModule {}
