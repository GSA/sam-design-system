import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gsa-sam-sds-popup-sample',
  templateUrl: './popup-sample.component.html',
  styleUrls: ['./popup-sample.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SdsPopupSampleComponent implements OnInit {
  sdsPopPosition: string;
  tooltipContent: string;
  inOrOutPosition: string;
  eleInnerContent: string;
  constructor() {

   }

  ngOnInit() {
    this.sdsPopPosition = 'bottom-left';
    this.tooltipContent = '<ul><li>First Item</li><li>Second Item</li><li>Third Item</li></ul>';
    this.inOrOutPosition = 'out';
    this.eleInnerContent = 'Tooltip here';
  }



}
