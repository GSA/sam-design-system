import { Component, OnInit ,ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'gsa-sam-sds-popup-sample',
  templateUrl: './popup-sample.component.html',
  styleUrls: ['./popup-sample.component.scss']
})
export class PopupSampleComponent implements OnInit {
  tooltipPosition: string;

  constructor() {

  }


  ngOnInit() {
    this.tooltipPosition = "bottom-center";
  }

  onPopupClick(){

  }

}
