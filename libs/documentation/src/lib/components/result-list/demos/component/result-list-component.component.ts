import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  templateUrl: './result-list-component.component.html',
})

export class ResultListComponent {

  constructor(private change: ChangeDetectorRef) { }

  itemsDefault = {
    "results": [
    { iconlib : 'sds', icon: "bell", text: 'First', id: 1 },
    { iconlib : 'sds', icon: 'book', text: 'Second', id: 2 },
    { iconlib : 'sds', icon: 'download', text: 'Third', id: 3 },
    { iconlib : 'fas', icon: 'comment', text: 'Fourth', id: 4 },
    { iconlib : 'sds', icon: 'arrow-left', text: 'Fifth', id: 5 , hasNewerData:true}
    ]
  }

  items = this.itemsDefault;

}
