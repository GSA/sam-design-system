import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsIconModule, SdsTooltipModule } from '../../../../../../../packages/components/src/lib/public-api';
import { TooltipBasic } from './tooltip-basic.component';

@NgModule({
  declarations: [TooltipBasic],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsTooltipModule,
    SdsIconModule
  ],
  exports: [TooltipBasic],
  bootstrap: [TooltipBasic]
})
export class TooltipBasicModule {}
