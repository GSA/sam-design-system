import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverviewComponent } from './overview.component';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [OverviewComponent],
  declarations: [OverviewComponent],
  providers: []
})
export class OverviewModule {}
