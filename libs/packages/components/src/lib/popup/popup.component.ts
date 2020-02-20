import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sds-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class SdsPopupComponent implements OnInit {

  sdsPopPositionEl: string;
  tooltipContentEl: string;
  inOrOutPositionEl: string;
  eleInnerContentEl: any;
  htmlContent: string;

  @Input() sdsPopClass: string;
  @Input() sdsPopupPosition: string;
  @Input() sdsTooltipContent: string;
  @Input() sdsInOrOutPosition: string;
  @Input() eleInnerContent: string;



  constructor() {

  }

  ngOnInit() {
    this.sdsPopPositionEl = this.sdsPopupPosition;
    this.tooltipContentEl = this.sdsTooltipContent;
    this.inOrOutPositionEl = this.sdsInOrOutPosition;
    this.eleInnerContentEl = this.eleInnerContent;
  }

}
