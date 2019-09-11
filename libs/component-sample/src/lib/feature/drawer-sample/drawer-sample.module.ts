import { NgModule } from '@angular/core';

import { DrawerSampleComponent } from './drawer-sample.component';
import { SdsDrawerModule } from '@gsa-sam/components';


@NgModule({
  imports: [SdsDrawerModule],
  exports: [],
  declarations: [DrawerSampleComponent],
  providers: []
})
export class DrawerSampleModule {}
