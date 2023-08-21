import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyRadioTemplateComponent } from './formly-radio-template.component';
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
    ReactiveFormsModule,
    SdsFormlyModule,
    IconModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), appendPrefix(_.cloneDeep(sdsAllIcons), 'sds'), _.cloneDeep(uswdsAllIcons))
    ),
    FormsModule,
    FormlyModule.forRoot(),
  ],
  declarations: [FormlyRadioTemplateComponent],
  bootstrap: [FormlyRadioTemplateComponent],
  exports: [FormlyRadioTemplateComponent],
})
export class FormlyRadioTemplateModule {}
