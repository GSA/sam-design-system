import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sds-date-pipe-current-day',
  templateUrl: './date-pipe-current-day.component.html',
})
export class DatePipeCurrentDayComponent {
  today: number = Date.now();
}
