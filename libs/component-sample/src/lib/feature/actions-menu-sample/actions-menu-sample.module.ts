import { NgModule } from '@angular/core';

import { ActionsMenuSampleComponent } from './actions-menu-sample.component';
import { SdsActionsMenuModule } from '@sam-design-system/layouts';

@NgModule({
  imports: [SdsActionsMenuModule],
  exports: [],
  declarations: [ActionsMenuSampleComponent],
  providers: []
})
export class ActionsMenuSampleModule {}
