import { NgModule } from '@angular/core';
import {
  SdsWorkspaceTier2ItemModule,
  SdsWorkspaceTier2LabelModule,
  SdsWorkspaceTier2TitleModule
} from '@gsa-sam/layouts';
import { ResultsComponent } from './results.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SdsWorkspaceTier2ItemModule,
    SdsWorkspaceTier2LabelModule,
    SdsWorkspaceTier2TitleModule
  ],
  declarations: [ResultsComponent],
  exports: [ResultsComponent],
  bootstrap: [ResultsComponent],
})
export class ResultsModule {}
