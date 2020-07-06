import {
  Component
} from '@angular/core';

@Component({
  templateUrl: './result-list-template.component.html'
})

export class ResultListTemplate {
  constructor() { }
 
  itemsDefault = [
    { title: 'First', id: 1 },
    { title: 'Second', id: 2 },
    { title: 'Third', id: 3 },
    { title: 'Fourth', id: 4 },
    { title: 'Fifth', id: 5, hasNewerData: true }
  ];

  items = {
    results:[],
    title: 'No results found'
  };
}
