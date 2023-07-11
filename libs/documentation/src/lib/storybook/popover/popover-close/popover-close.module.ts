import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverCloseComponent } from './popover-close.component';
import { NgxPopperjsModule } from 'ngx-popperjs';

@NgModule({
  imports: [CommonModule, NgxPopperjsModule],
  declarations: [PopoverCloseComponent],
  exports: [PopoverCloseComponent],
  bootstrap: [PopoverCloseComponent],
})
export class PopoverCloseModule {}
