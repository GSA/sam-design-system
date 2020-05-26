import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'entity-result',
  templateUrl: './entity-result.component.html',
  styleUrls: []
})
export class EntityResultComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
  }

}
