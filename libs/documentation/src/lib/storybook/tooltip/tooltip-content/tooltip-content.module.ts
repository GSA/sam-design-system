import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipContentComponent } from './tooltip-content.component';
import { NgxPopperjsModule } from 'ngx-popperjs';

@NgModule({
  imports: [
    CommonModule,
    NgxPopperjsModule
  ],
  declarations: [TooltipContentComponent],
  exports: [TooltipContentComponent],
  bootstrap: [TooltipContentComponent],
})
export class TooltipContentModule { }
