import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableBorderlessComponent } from './borderless.component';


@NgModule({
  declarations: [TableBorderlessComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    FontAwesomeModule
  ],
  exports: [TableBorderlessComponent],
  bootstrap: [TableBorderlessComponent]
})

export class TableBorderlessModule { }
