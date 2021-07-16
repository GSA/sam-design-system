import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule, SdsPageModule } from '@gsa-sam/components';

import { SdsActionsMenuModule } from '@gsa-sam/layouts';
import { ResultListComponent } from './result-list-component.component';
import { ResultListItemSampleComponent } from './item.component';
import { ResultListItemChildSampleComponent } from './child-item.component';
import { NgxBootstrapIconsModule, check, threeDots, question } from 'ngx-bootstrap-icons';
import { IconModule, bars, newVersion } from 'ngx-uswds-icons';

@NgModule({
  declarations: [
    ResultListComponent,
    ResultListItemSampleComponent,
    ResultListItemChildSampleComponent
  ],
  imports: [
    IconModule,
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
