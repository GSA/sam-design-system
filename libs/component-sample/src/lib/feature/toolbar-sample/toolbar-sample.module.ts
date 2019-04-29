import { NgModule } from '@angular/core';

import {
  SdsAccordionModule,
  SdsToolbarModule,
  SdsPageModule
} from '@gsa-sam/components';

import { ToolbarSampleComponent } from './toolbar-sample.component';

@NgModule({
  imports: [SdsAccordionModule, SdsToolbarModule, SdsPageModule],
  exports: [ToolbarSampleComponent],
  declarations: [ToolbarSampleComponent],
  providers: []
})
export class ToolbarSampleModule {}
