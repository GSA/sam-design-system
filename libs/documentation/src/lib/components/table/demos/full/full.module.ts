import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableFullComponent } from './full.component';


@NgModule({
  declarations: [TableFullComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    FontAwesomeModule
  ],
  exports: [TableFullComponent],
  bootstrap: [TableFullComponent]
})

export class TableFullModule { }
