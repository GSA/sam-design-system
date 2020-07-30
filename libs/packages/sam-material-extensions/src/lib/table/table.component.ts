import { Component, Input } from '@angular/core';

@Component({
  selector: 'sds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class SdsTableComponent {

  @Input() dataSource;
  @Input() columns: string[];
  @Input() borderless?: boolean = false;
  @Input() stickyHeader?: boolean = false

  constructor() { }

}

