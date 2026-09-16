import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsUswds } from './icons-uswds.component';
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
      Object.assign(_.cloneDeep(allIcons), appendPrefix(_.cloneDeep(sdsAllIcons), 'sds'), _.cloneDeep(uswdsAllIcons)),
    ),
  ],
  declarations: [IconsUswds],
  exports: [IconsUswds],
  bootstrap: [IconsUswds],
})
export class IconsUswdsModule {}
