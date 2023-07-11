import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipConfigurableComponent } from './tooltip-configurable.component';
import { NgxPopperjsModule } from 'ngx-popperjs';

@NgModule({
  imports: [CommonModule, NgxPopperjsModule],
  declarations: [TooltipConfigurableComponent],
  exports: [TooltipConfigurableComponent],
  bootstrap: [TooltipConfigurableComponent],
})
export class TooltipConfigurableModule {}
