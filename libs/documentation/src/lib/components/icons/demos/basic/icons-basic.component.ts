import { Component } from '@angular/core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';

@Component({
  templateUrl: './icons-basic.component.html',
  styleUrls: ['./icons-basic.component.scss'],
  selector: `sds-icons-basic-demo`,
})
export class IconsBasic {
  sdsIcons = sds;

}
