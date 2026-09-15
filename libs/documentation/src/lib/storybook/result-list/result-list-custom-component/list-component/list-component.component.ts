import { Component, Input } from '@angular/core';

@Component({
	standalone: false,
  selector: 'sds-list-component',
  templateUrl: './list-component.component.html',
})
export class ListComponentComponent {
  @Input('item')
  item: { title: string; id: number };

  constructor() {}
}
