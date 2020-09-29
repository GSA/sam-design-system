import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableStickyComponent } from './sticky.component';


@NgModule({
  declarations: [TableStickyComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    FontAwesomeModule
  ],
  exports: [TableStickyComponent],
  bootstrap: [TableStickyComponent]
})

export class TableStickyModule { }
