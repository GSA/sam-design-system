import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SdsIconModule, SdsDateModule } from '@gsa-sam/components';
import { DatePipeBasicComponent } from './date-pipe-basic.component';


@NgModule({
  imports: [CommonModule, SdsIconModule, SdsDateModule],
  declarations: [DatePipeBasicComponent],
  exports: [DatePipeBasicComponent],
  bootstrap: [DatePipeBasicComponent]
})
export class DatePipeBasicModule {}
