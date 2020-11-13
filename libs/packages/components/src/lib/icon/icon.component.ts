import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sds-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class SdsIconComponent {

  @Input()
  set icon(iconToShow: Array<string>){
    if(iconToShow.length !== 2){
      return
    }
    this.library = iconToShow[0];
    this.iconToFind = iconToShow[1];
  };
  @Input() rotate: number = 0;
  @Input() size: string = 'lg';

  library: string;
  iconToFind: string;

}
