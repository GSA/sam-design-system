import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { TableSelectRowsComponent } from './table-select-rows.component';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { NgxBootstrapIconsModule, caretDownFill, chevronRight } from 'ngx-bootstrap-icons';
import { SdsPopoverModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    SdsTableModule,
    FormsModule,
    IconModule,
    NgxBootstrapIconsModule.pick({caretDownFill, chevronRight}),
    SdsPopoverModule
  ],
  declarations: [TableSelectRowsComponent],
  exports: [TableSelectRowsComponent],
  bootstrap: [TableSelectRowsComponent],
})
export class TableSelectRowsModule {}
