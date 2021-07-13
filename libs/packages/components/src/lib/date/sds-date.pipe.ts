import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'sdsDate'
})
export class SdsDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(value: string | number): string {
    const passedInDate = new Date(value);
    const now = new Date();

    if(
      now.getFullYear() === passedInDate.getFullYear() &&
      now.getMonth() === passedInDate.getMonth() &&
      now.getDate() === passedInDate.getDate()
    ){
      return this.datePipe.transform(passedInDate, 'shortTime');
    } else if(now.getFullYear() === passedInDate.getFullYear()){
      return this.datePipe.transform(passedInDate, 'MMM d');
    } else {
      return this.datePipe.transform(passedInDate, 'mediumDate');
    }
  }

}
