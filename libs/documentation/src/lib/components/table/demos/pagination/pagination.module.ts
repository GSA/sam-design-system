import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

import { TablePaginationComponent } from './pagination.component';
import { IconModule } from 'ngx-uswds-icons';


@NgModule({
  declarations: [TablePaginationComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    IconModule
  ],
  exports: [TablePaginationComponent],
  bootstrap: [TablePaginationComponent]
})

export class TablePaginationModule { }
