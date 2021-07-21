import { NgModule } from '@angular/core';
import { SdsPageModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule } from '@gsa-sam/components';

import { SdsActionsMenuModule } from '@gsa-sam/layouts';
import { ResultListTemplate } from './result-list-template.component';
import { NgxBootstrapIconsModule, book } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

@NgModule({
  declarations: [ResultListTemplate],
  imports: [
    IconModule,
    CommonModule,
    FormsModule,
    SdsPageModule,
    SdsSearchResultListModule,
    SdsActionsMenuModule,
    NgxBootstrapIconsModule.pick({book})
  ],
  exports: [ResultListTemplate],
  bootstrap: [ResultListTemplate]
})
export class ResultListTemplateModule {}
