import { Component } from '@angular/core';

@Component({
	standalone: false,
  selector: 'sds-result-list-custom-template',
  templateUrl: './result-list-custom-template.component.html',
})
export class ResultListCustomTemplateComponent {
  constructor() {}

  items = {
    results: [],
    title: 'Test Title',
  };
}
