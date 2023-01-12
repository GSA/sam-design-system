import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sds-date-pipe-non-current-year',
  templateUrl: './date-pipe-non-current-year.component.html',
})
export class DatePipeNonCurrentYearComponent {
  nonCurrentYear: string = '';
  constructor() {
    const now = new Date();
    this.nonCurrentYear = new Date(now.getFullYear() - 1, 0, 1).toLocaleString();
  }
}
