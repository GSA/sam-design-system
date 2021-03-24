import { Component } from '@angular/core';
import { allIcons } from '@gsa-sam/components';
import { kebabCase } from 'lodash-es';

@Component({
  templateUrl: './icons-basic.component.html',
  styleUrls: ['./icons-basic.component.scss'],
  selector: `sds-icons-basic-demo`,
})
export class IconsBasic {
  sdsIcons = Object.keys(allIcons)
  .map(iconName => kebabCase(iconName));


}
