import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverPositionComponent } from './popover-position.component';
import { NgxPopperjsModule } from 'ngx-popperjs';

@NgModule({
  imports: [CommonModule, NgxPopperjsModule],
  declarations: [PopoverPositionComponent],
  exports: [PopoverPositionComponent],
  bootstrap: [PopoverPositionComponent],
})
export class PopoverPositionModule {}
