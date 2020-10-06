import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TablePaginationComponent } from './pagination.component';


@NgModule({
  declarations: [TablePaginationComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    FontAwesomeModule
  ],
  exports: [TablePaginationComponent],
  bootstrap: [TablePaginationComponent]
})

export class TablePaginationModule { }
