import { NgModule } from '@angular/core';
import { SubHeaderBasic } from './subheader-basic.component';
import { SdsSubheaderModule } from '@sam-design-system/layouts';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsSearchModule } from '@gsa-sam/components';

@NgModule({
  imports: [CommonModule, SdsSubheaderModule, FontAwesomeModule, SdsSearchModule],
  declarations: [SubHeaderBasic],
  exports: [SubHeaderBasic],
  bootstrap: [SubHeaderBasic]
})
export class SubHeaderBasicModule {}
