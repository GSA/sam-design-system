import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListMessagesComponent } from './result-list-messages.component';
import { SdsSearchResultListModule, SdsPageModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsSearchResultListModule, SdsPageModule],
  declarations: [ResultListMessagesComponent],
  bootstrap: [ResultListMessagesComponent],
  exports: [ResultListMessagesComponent],
})
export class ResultListMessagesModule {}
