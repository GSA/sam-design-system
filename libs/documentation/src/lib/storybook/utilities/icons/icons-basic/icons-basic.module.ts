import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsBasic } from './icons-basic.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { IconModule, allIcons as sdsAllIcons, uswdsAllIcons } from '@gsa-sam/ngx-uswds-icons';
import * as _ from 'lodash-es';

export const appendPrefix = (iconsObject: { [key: string]: string }, prefix: string): { [key: string]: string } => {
  const prefixedIconsObject = {};
  Object.keys(iconsObject).forEach((key) => {
    prefixedIconsObject[`${prefix}${_.upperFirst(key)}`] = iconsObject[key];
  });
  return prefixedIconsObject;
};

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), appendPrefix(_.cloneDeep(sdsAllIcons), 'sds'), _.cloneDeep(uswdsAllIcons))
    ),
  ],
  declarations: [IconsBasic],
  exports: [IconsBasic],
  bootstrap: [IconsBasic],
})
export class IconsBasicModule {}
