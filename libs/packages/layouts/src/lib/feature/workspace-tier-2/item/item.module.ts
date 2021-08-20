import { NgModule } from '@angular/core';
import {
  SdsWorkspaceTier2ItemBodyComponent,
  SdsWorkspaceTier2ItemComponent,
  SdsWorkspaceTier2ItemHeadComponent,
} from './item.component';

@NgModule({
  imports: [],
  exports: [
    SdsWorkspaceTier2ItemComponent,
    SdsWorkspaceTier2ItemHeadComponent,
    SdsWorkspaceTier2ItemBodyComponent,
  ],
  declarations: [
    SdsWorkspaceTier2ItemComponent,
    SdsWorkspaceTier2ItemHeadComponent,
    SdsWorkspaceTier2ItemBodyComponent,
  ],
  providers: [],
})
export class SdsWorkspaceTier2ItemModule {}
