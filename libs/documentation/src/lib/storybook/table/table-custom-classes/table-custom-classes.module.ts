import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCustomClassesComponent } from './table-custom-classes.component';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [CommonModule, SdsTableModule],
  declarations: [TableCustomClassesComponent],
  exports: [TableCustomClassesComponent],
  bootstrap: [TableCustomClassesComponent],
})
export class TableCustomClassesModule {}
