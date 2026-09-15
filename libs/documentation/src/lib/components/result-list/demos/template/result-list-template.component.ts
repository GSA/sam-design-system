import { Component } from '@angular/core';

@Component({
    templateUrl: './result-list-template.component.html',
    selector: `sds-result-list-template-demo`,
    standalone: false
})
export class ResultListTemplate {
  items = {
    results: [],
    title: 'No results found',
  };
}
