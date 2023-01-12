import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipeCurrentDayComponent } from './date-pipe-current-day.component';
import { SdsDateModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsDateModule],
  exports: [DatePipeCurrentDayComponent],
  declarations: [DatePipeCurrentDayComponent],
  bootstrap: [DatePipeCurrentDayComponent],
})
export class DatePipeCurrentDayModule {}
