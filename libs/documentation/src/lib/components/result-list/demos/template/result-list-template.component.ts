import {
  Component
} from '@angular/core';

@Component({
  templateUrl: './result-list-template.component.html',
  selector: `sds-result-list-template-demo`,
})

export class ResultListTemplate {
  items = {
    results:[],
    title: 'No results found'
  };
}
