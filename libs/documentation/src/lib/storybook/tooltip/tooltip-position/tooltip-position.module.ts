import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipPositionComponent } from './tooltip-position.component';
import { NgxPopperjsModule } from 'ngx-popperjs';

@NgModule({
  imports: [CommonModule, NgxPopperjsModule],
  declarations: [TooltipPositionComponent],
  exports: [TooltipPositionComponent],
  bootstrap: [TooltipPositionComponent],
})
export class TooltipPositionModule {}
