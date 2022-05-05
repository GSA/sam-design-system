import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { TableHighlightComponent } from './highlight.component';

@NgModule({
  declarations: [TableHighlightComponent],
  imports: [CommonModule, SdsTableModule, IconModule],
  exports: [TableHighlightComponent],
  bootstrap: [TableHighlightComponent],
})
export class TableHighlightModule {}
