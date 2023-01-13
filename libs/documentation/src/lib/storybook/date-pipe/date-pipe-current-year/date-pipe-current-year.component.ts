import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sds-date-pipe-current-year',
  templateUrl: './date-pipe-current-year.component.html',
})
export class DatePipeCurrentYearComponent {
  thisYear: string = '';
  constructor() {
    const now = new Date();
    this.thisYear = new Date(now.getFullYear(), 0, now.getDate() === 1 ? 2 : 1).toLocaleString();
  }
}
