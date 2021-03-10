import { NgModule } from '@angular/core';
import { SdsIconModule, SdsPageModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule } from '@gsa-sam/components';

import { SdsActionsMenuModule } from '@gsa-sam/layouts';
import { ResultListCardComponent } from './result-list-card-component.component';
import { ResultListCardItemSampleComponent } from './card-item.component';
import { ResultListCardItemChildSampleComponent } from './child-card-item.component';

@NgModule({
  declarations: [
    ResultListCardComponent,
    ResultListCardItemSampleComponent,
    ResultListCardItemChildSampleComponent
  ],
  imports: [
    SdsIconModule,
    CommonModule,
    FormsModule,
    SdsPageModule,
    SdsSearchResultListModule,
    SdsActionsMenuModule
  ],
  exports: [ResultListCardComponent],
  bootstrap: [ResultListCardComponent]
})
export class ResultListCardComponentModule {}
