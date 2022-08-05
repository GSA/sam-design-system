import { NgModule } from '@angular/core';
import { SdsPageModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule } from '@gsa-sam/components';

import { SdsActionsMenuModule } from '@gsa-sam/components';
import { ResultListCardComponent } from './result-list-card-component.component';
import { ResultListCardItemSampleComponent } from './card-item.component';
import { ResultListCardItemChildSampleComponent } from './child-card-item.component';
import { NgxBootstrapIconsModule, question, check, threeDots, book, download } from 'ngx-bootstrap-icons';
import { IconModule, bars, newVersion, comment, bell } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [ResultListCardComponent, ResultListCardItemSampleComponent, ResultListCardItemChildSampleComponent],
  imports: [
    IconModule,
    CommonModule,
    FormsModule,
    SdsPageModule,
    SdsSearchResultListModule,
    SdsActionsMenuModule,
    NgxBootstrapIconsModule.pick({ question, bars, newVersion, check, threeDots, book, comment, bell, download }),
  ],
  exports: [ResultListCardComponent],
  bootstrap: [ResultListCardComponent],
})
export class ResultListCardComponentModule {}
