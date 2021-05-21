import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gsa-sam-date-pipe-basic',
  templateUrl: './date-pipe-basic.component.html'
})
export class DatePipeBasicComponent{

  today = Date.now();

  currentYearDate
  previouseYearDate = new Date(2019, 2, 1)

  constructor() {
  this.initCurrentYearDate();
  }

  initCurrentYearDate(){
    const todayDate = new Date(this.today);
    if(todayDate.getMonth() === 0){
      this.currentYearDate = new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, todayDate.getDate())
    }else {
      this.currentYearDate = new Date(todayDate.getFullYear(), todayDate.getMonth() - 1, todayDate.getDate())
    }
  }

}
