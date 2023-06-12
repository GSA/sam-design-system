import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUserInteractionComponent } from './table-user-interaction.component';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';

@NgModule({
  imports: [
    CommonModule,
    SdsTableModule,
  ],
  declarations: [TableUserInteractionComponent],
  exports: [TableUserInteractionComponent]
})
export class TableUserInteractionModule { }
