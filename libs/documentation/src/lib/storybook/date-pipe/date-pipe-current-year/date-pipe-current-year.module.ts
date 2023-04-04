import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipeCurrentYearComponent } from './date-pipe-current-year.component';
import { SdsDateModule } from '@gsa-sam/components';
import { bootstrap } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [CommonModule, SdsDateModule],
  exports: [DatePipeCurrentYearComponent],
  declarations: [DatePipeCurrentYearComponent],
  bootstrap: [DatePipeCurrentYearComponent],
})
export class DatePipeCurrentYearModule {}
