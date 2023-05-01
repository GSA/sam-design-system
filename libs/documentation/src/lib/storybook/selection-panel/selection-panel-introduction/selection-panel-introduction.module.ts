import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionPanelIntroductionComponent } from './selection-panel-introduction.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SelectionPanelIntroductionComponent],
  bootstrap: [SelectionPanelIntroductionComponent],
  exports: [SelectionPanelIntroductionComponent],
})
export class SelectionPanelIntroductionModule {}
