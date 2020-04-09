import { Component } from '@angular/core';

@Component({
  templateUrl: './search-basic.component.html'
})
export class SearchBasic {
  log(value) {
    console.log(`%cLog: ${value}`, 'color: blue; font-weight: bold');
  }
}
