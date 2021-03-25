import { NgModule } from '@angular/core';
import { SdsIconModule, SdsPageModule, newVersion } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule, bars } from '@gsa-sam/components';

import { SdsActionsMenuModule } from '@gsa-sam/layouts';
import { ResultListComponent } from './result-list-component.component';
import { ResultListItemSampleComponent } from './item.component';
import { ResultListItemChildSampleComponent } from './child-item.component';
import { NgxBootstrapIconsModule, check, threeDots, question } from 'ngx-bootstrap-icons';

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
    SdsActionsMenuModule,
    NgxBootstrapIconsModule.pick({newVersion, check, threeDots, question, bars})
  ],
  exports: [ResultListComponent],
  bootstrap: [ResultListComponent]
})
export class ResultListComponentModule {}
