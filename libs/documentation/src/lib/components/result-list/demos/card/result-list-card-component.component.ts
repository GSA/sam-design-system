import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  templateUrl: './result-list-card-component.component.html',
  selector: `sds-result-list-card-demo`,
})

export class ResultListCardComponent {

  constructor(private change: ChangeDetectorRef) { }

  itemsDefault = [
    { iconlib : 'sds', icon: "bell", text: 'First', id: 1 },
    { iconlib : 'sds', icon: 'book', text: 'Second', id: 2 },
    { iconlib : 'sds', icon: 'download', text: 'Third', id: 3 },
    { iconlib : 'sds', icon: 'comment', text: 'Fourth', id: 4 },
    { iconlib : 'sds', icon: 'comment', text: 'Fifth', id: 5 , hasNewerData:true}
  ];

  items = this.itemsDefault;

}
