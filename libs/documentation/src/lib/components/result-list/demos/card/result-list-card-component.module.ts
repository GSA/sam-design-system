import { NgModule } from '@angular/core';
import { SdsPageModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule } from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsActionsMenuModule } from '@sam-design-system/layouts';
import { ResultListCardComponent } from './result-list-card-component.component';
import { ResultListCardItemSampleComponent } from './card-item/card-item.component';
import { ResultListCardItemChildSampleComponent } from './card-item/child-card-item/child-card-item.component';

@NgModule({
  declarations: [
    ResultListCardComponent,
    ResultListCardItemSampleComponent,
    ResultListCardItemChildSampleComponent
  ],
  imports: [
    FontAwesomeModule,
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
