import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SdsTableModule } from '@gsa-sam/sam-material-extensions';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableBasicComponent } from './basic.component';


@NgModule({
  declarations: [TableBasicComponent],
  imports: [
    CommonModule,
    SdsTableModule,
    FontAwesomeModule
  ],
  exports: [TableBasicComponent],
  bootstrap: [TableBasicComponent]
})

export class TableBasicModule { }
