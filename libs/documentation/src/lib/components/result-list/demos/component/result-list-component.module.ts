import { NgModule } from '@angular/core';
import { SdsPageModule } from '@gsa-sam/components';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SdsSearchResultListModule } from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsActionsMenuModule } from '@sam-design-system/layouts';
import { ResultListComponent } from './result-list-component.component';
import { ResultListItemSampleComponent } from './item/item.component';
import { ResultListItemChildSampleComponent } from './item/child-item/child-item.component';

@NgModule({
  declarations: [
    ResultListComponent,
    ResultListItemSampleComponent,
    ResultListItemChildSampleComponent
  ],
  imports: [
    FontAwesomeModule,
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
