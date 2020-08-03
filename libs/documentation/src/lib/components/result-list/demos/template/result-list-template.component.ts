import {
  Component
} from '@angular/core';

@Component({
  templateUrl: './result-list-template.component.html'
})

export class ResultListTemplate {
  items = {
    results:[],
    title: 'No results found'
  };
}
