import { NgModule } from '@angular/core';
import { SdsIconModule, SdsPageModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule } from '@gsa-sam/components';

import { SdsActionsMenuModule } from '@gsa-sam/layouts';
import { ResultListComponent } from './result-list-component.component';
import { ResultListItemSampleComponent } from './item.component';
import { ResultListItemChildSampleComponent } from './child-item.component';

@NgModule({
  declarations: [
    ResultListComponent,
    ResultListItemSampleComponent,
    ResultListItemChildSampleComponent
  ],
  imports: [
    SdsIconModule,
    CommonModule,
    FormsModule,
    SdsPageModule,
    SdsSearchResultListModule,
    SdsActionsMenuModule
  ],
  exports: [ResultListComponent],
  bootstrap: [ResultListComponent]
})
export class ResultListComponentModule {}
