import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipeNonCurrentYearComponent } from './date-pipe-non-current-year.component';
import { SdsDateModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsDateModule],
  exports: [DatePipeNonCurrentYearComponent],
  declarations: [DatePipeNonCurrentYearComponent],
  bootstrap: [DatePipeNonCurrentYearComponent],
})
export class DatePipeNonCurrentYearModule {}
