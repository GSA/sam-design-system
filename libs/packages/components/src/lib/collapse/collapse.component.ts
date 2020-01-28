import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sds-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class SdsCollapseComponent implements OnInit {

  public isCollapsedContent:boolean = false;
  constructor() { }

  @Input('buttonLable') buttonLable: string;

  @Input('collapseContent') collapseContent: string;

  ngOnInit() {

  }

}
