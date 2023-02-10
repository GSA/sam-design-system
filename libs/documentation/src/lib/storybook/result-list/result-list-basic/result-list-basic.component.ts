import { Component } from '@angular/core';

@Component({
  selector: 'sds-result-list-basic',
  templateUrl: './result-list-basic.component.html',
})
export class ResultListBasicComponent {
  constructor() {}

  itemsDefault = [
    { title: 'First', id: 1 },
    { title: 'Second', id: 2 },
    { title: 'Third', id: 3 },
    { title: 'Fourth', id: 4 },
    { title: 'Fifth', id: 5, hasNewerData: true },
  ];

  items = {
    results: this.itemsDefault,
  };
}
