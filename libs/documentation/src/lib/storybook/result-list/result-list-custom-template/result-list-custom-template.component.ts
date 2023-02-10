import { Component } from '@angular/core';

@Component({
  selector: 'sds-result-list-custom-template',
  templateUrl: './result-list-custom-template.component.html',
})
export class ResultListCustomTemplateComponent {
  constructor() {}

  itemsDefault = [
    { title: 'First', id: 1 },
    { title: 'Second', id: 2 },
    { title: 'Third', id: 3 },
    { title: 'Fourth', id: 4 },
    { title: 'Fifth', id: 5 },
  ];

  items = {
    results: [],
    title: 'No results found',
  };
}
