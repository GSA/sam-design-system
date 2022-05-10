import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SdsDatePipe } from './sds-date.pipe';

@NgModule({
  declarations: [SdsDatePipe],
  imports: [CommonModule],
  exports: [SdsDatePipe],
  providers: [DatePipe],
})
export class SdsDateModule {}
