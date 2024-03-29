import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListMessagesComponent } from './result-list-messages.component';
import { SdsSearchResultListModule, SdsPageModule } from '@gsa-sam/components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    SdsSearchResultListModule,
    SdsPageModule,
    ReactiveFormsModule,
    SdsFormlyModule,
    FormsModule,
    FormlyModule.forRoot(),
  ],
  declarations: [ResultListMessagesComponent],
  bootstrap: [ResultListMessagesComponent],
  exports: [ResultListMessagesComponent],
})
export class ResultListMessagesModule {}
