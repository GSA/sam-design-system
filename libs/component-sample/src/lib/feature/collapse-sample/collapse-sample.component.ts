import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gsa-sam-collapse-sample',
  templateUrl: './collapse-sample.component.html',
  styleUrls: ['./collapse-sample.component.scss']
})
export class CollapseSampleComponent implements OnInit {
  public isCollapsedContent:boolean = true;

  constructor() { }

  ngOnInit() {}

}
