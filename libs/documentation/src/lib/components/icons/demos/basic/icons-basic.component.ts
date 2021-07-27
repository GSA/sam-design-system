import { Component } from '@angular/core';
import { kebabCase } from 'lodash-es';
import { allIcons } from '@gsa-sam/ngx-uswds-icons';
import * as _ from 'lodash';


@Component({
  templateUrl: './icons-basic.component.html',
  styleUrls: ['./icons-basic.component.scss'],
  selector: `sds-icons-basic-demo`,
  preserveWhitespaces: true
})
export class IconsBasic {
  appendPrefix (iconsObject: {[key: string]: string}, prefix: string): Object {
    const prefixedIconsObject = {};
    Object.keys(iconsObject).forEach(key => {
      prefixedIconsObject[`${prefix}${_.upperFirst(key)}`] = iconsObject[key];
    })
    return prefixedIconsObject;
  };

  sdsIcons = Object.keys(this.appendPrefix(allIcons, 'sds'))
  .map(iconName => kebabCase(iconName));

  displayName = Object.keys(allIcons)
  .map(iconName => kebabCase(iconName));



}
