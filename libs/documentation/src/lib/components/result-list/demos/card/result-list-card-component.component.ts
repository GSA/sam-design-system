import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  templateUrl: './result-list-card-component.component.html',
  selector: `sds-result-list-card-demo`,
})
export class ResultListCardComponent {
  constructor(private change: ChangeDetectorRef) {}

  itemsDefault = [
    { icon: 'bell', text: 'First', id: 1 },
    { icon: 'book', text: 'Second', id: 2 },
    { icon: 'download', text: 'Third', id: 3 },
    { icon: 'comment', text: 'Fourth', id: 4 },
    { icon: 'comment', text: 'Fifth', id: 5, hasNewerData: true },
  ];

  items = this.itemsDefault;
}
